import React from "react";
import topTracks from "./top-tracks.json";

const Spotify = () => {
  const items = topTracks.items;

  return (
    <section className="bg-gray-800 rounded-lg mt-5 p-8 border border-gray-700 shadow-lg" id="projects">
      <p className="text-white mb-6">
        I'm still working on this project, but meanwhile, you can look at my top 50 Spotify tracks.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-gray-900 p-4 rounded-lg shadow-md">
            <img
              src={item.album.images[0].url}
              alt={item.name}
              className="w-full h-32 object-cover rounded-md mb-4"
            />
            <h3 className="text-white text-lg font-semibold">{item.name}</h3>
            <p className="text-gray-400">{item.album.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Spotify;
