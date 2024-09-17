import React, { useState } from "react";
import classNames from "classnames";
import { useQuery } from "react-query";
import { getSpotifyData } from "../api";
import Loading from "../components/Loading";
import TrackCard from "./TrackCard";
import ArtistCard from "./ArtistCard";

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
              <TrackCard key={idx} item={item} index={idx} activeTab={activeTab} />
            )) : items?.map((item, idx) => (
              <ArtistCard key={idx} item={item} index={idx} activeTab={activeTab} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Spotify;
