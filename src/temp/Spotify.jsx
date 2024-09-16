import React, { useState } from "react";
import classNames from "classnames";
import { useQuery } from "react-query";
import { getSpotifyData } from "../api";
import Loading from "../components/Loading";

const Spotify = () => {
  const [activeTab, setActiveTab] = useState("artists");

  const topArtistsQuery = useQuery(
    ["topArtists", "processed", "artists.json"],
    () => getSpotifyData("processed", "artists.json")
  );

  const topTracksQuery = useQuery(
    ["topTracks", "processed", "tracks.json"],
    () => getSpotifyData("processed", "tracks.json"),
    { enabled: activeTab === "tracks" } // Solo carga los tracks si está activo
  );

  const topTracks = topTracksQuery.data?.items;
  const topArtists = topArtistsQuery.data?.items;
  const isLoading = activeTab === "tracks" ? topTracksQuery.isLoading : topArtistsQuery.isLoading;

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const items = activeTab === "tracks" ? topTracks : topArtists;

  const TrackCard = ({ item }) => {
    // Función para convertir la duración de milisegundos a minutos y segundos
    const formatDuration = (ms) => {
      const minutes = Math.floor(ms / 60000);
      const seconds = ((ms % 60000) / 1000).toFixed(0);
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return (
      <div className="bg-gray-900 p-4 rounded-lg shadow-md">
        {/* Imagen del track */}
        <img
          src={item.image_url}
          alt={item.track_name}
          className="w-full h-auto object-cover rounded-md mb-4"
        />
        <h3 className="text-white text-lg font-semibold mb-2">{item.track_name}</h3>
        <p className="text-white text-sm mb-1">{item.artist_names.join(" | ")}</p>
        <p className="text-gray-400 text-sm mb-1">Album: {item.album_name}</p>
        <p className="text-white text-sm mb-1">Duration: {formatDuration(item.duration_ms)}</p>
        <p className="text-white text-sm mb-1">Popularity: {item.popularity}</p>

        {item.explicit && (
          <span
            className="inline-block bg-red-200 rounded-full px-3 py-1 text-xs font-semibold text-red-800 mr-2 mb-2 shadow-md shadow-gray-950"
          >
            Explicit
          </span>
        )}

        {/* Enlace a Spotify */}
        <a
          href={item.spotify_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1DB954] hover:underline mt-4 block"
        >
          Listen on Spotify
        </a>
      </div>
    );
  };

  const ArtistCard = ({ item }) => {
    return (
      <div className="bg-gray-900 p-6 rounded-lg shadow-md">
        <img
          src={item.image_url}
          alt={item.name}
          className="w-full h-auto object-cover rounded-md mb-4"
        />
        <h3 className="text-white text-xl font-bold mb-2">{item.name}</h3>
        <p className="text-white text-sm mb-2">Popularity: {item.popularity}</p>
        <p className="text-white text-sm mb-2">Followers: {item.followers.toLocaleString()}</p>
        <div className="text-white">
          <div className="pt-4 pb-2">
            {item.genres?.map((tag, idx) => (
              <span
                key={idx}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 shadow-md shadow-gray-950"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a
          href={item.spotify_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#1DB954] hover:underline mt-4 block"
        >
          Listen on Spotify
        </a>
      </div>
    );
  };

  return (
    <div id="projects">
      <section className="bg-gray-800 rounded-lg m-5 p-8 border border-gray-700 shadow-lg">
        <div className="text-white">
          <p>I'm actively working on this project, but for now, explore my top Spotify tracks and artists 💚.</p>
          <p>I connect to the Spotify API daily to retrieve my top 50 tracks and artists, which are then ingested into an Azure Data Lake through an automated Azure Data Factory pipeline.</p>
        </div>
        <code className="text-gray-400 block overflow-auto break-words">
          {activeTab === "tracks"
            ? "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=50&offset=0"
            : "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50&offset=0"}
        </code>
        <div className="flex justify-center space-x-4 mt-5">
          <button
            className={classNames("border-purple-950 border px-4 py-2 rounded-lg text-white bg-[#0f172a]", { "bg-purple-700": activeTab === "artists" })}
            onClick={() => handleTabClick("artists")}
          >
            Top Artists
          </button>
          <button
            className={classNames("border-purple-950 border px-4 py-2 rounded-lg text-white bg-[#0f172a]", { "bg-purple-700": activeTab === "tracks" })}
            onClick={() => handleTabClick("tracks")}
          >
            Top Tracks
          </button>
        </div>
      </section>
      <section className="bg-gray-800 rounded-lg m-5 p-8 border border-gray-700 shadow-lg">
        {isLoading ? (
          <div className="flex justify-center">
            <Loading />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-5">
            {activeTab === "tracks" ? items?.map((item, idx) => (
              <TrackCard key={idx} item={item} activeTab={activeTab} />
            )) : items?.map((item, idx) => (
              <ArtistCard key={idx} item={item} activeTab={activeTab} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Spotify;
