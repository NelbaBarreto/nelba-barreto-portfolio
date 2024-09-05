import React, { useState } from "react";
import topTracks from "./topTracks.json";
import topArtists from "./topArtists.json";

const Spotify = () => {
  const [activeTab, setActiveTab] = useState("tracks");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const items = activeTab === "tracks" ? topTracks.items : topArtists.items;

  return (
    <section
      className="bg-gray-800 rounded-lg m-5 p-8 border border-gray-700 shadow-lg"
      id="projects"
    >
      <p className="text-white">
        I'm still working on this project, but in the meantime, check out my top
        50 Spotify tracks and artists, which I retrieved using Azure Data
        Factory (ADF).
      </p>
      <code className="text-gray-400 block overflow-auto break-words">
        {activeTab === "tracks"
          ? "https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=50&offset=0"
          : "https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50&offset=0"}
      </code>
      <div className="flex justify-center space-x-4 mt-5">
        <button
          className={`border-purple-950 border px-4 py-2 rounded-lg text-white ${activeTab === "tracks"
              ? "bg-purple-700"
              : "bg-[#0f172a] text-gray-300"
            }`}
          onClick={() => handleTabClick("tracks")}
        >
          Top Tracks
        </button>
        <button
          className={`border-purple-950 border px-4 py-2 rounded-lg text-white ${activeTab === "artists"
              ? "bg-purple-700"
              : "bg-[#0f172a] text-gray-300"
            }`}
          onClick={() => handleTabClick("artists")}
        >
          Top Artists
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-5">
        {items.map((item, idx) => (
          <div key={idx} className="bg-gray-900 p-4 rounded-lg shadow-md">
            <img
              src={
                activeTab === "tracks"
                  ? item.album.images[0].url
                  : item.images[0].url
              }
              alt={item.name}
              className="w-full h-auto object-cover rounded-md mb-4"
            />
            <h3 className="text-white text-lg font-semibold">{item.name}</h3>
            <p className="text-white">
              {activeTab === "tracks" ? item.artists[0].name : <div className="pt-4 pb-2">
                {item.genres.map((tag, idx) => {
                  return (
                    <span key={idx}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 shadow-md shadow-gray-950">
                      {tag}
                    </span>
                  )
                })}
              </div>}
            </p>
            {activeTab === "tracks" && (
              <p className="text-gray-400">{item.album.name}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spotify;
