import SpotifyButton from "./SpotifyButton";

const ArtistCard = ({ item, index }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg shadow-md">
      <img
        src={item.image_url}
        alt={item.name}
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <h3 className="text-white text-xl font-bold mb-2">
        <span className="text-purple-500">#{index + 1}</span> {item.name}
      </h3>
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
      <SpotifyButton url={item.spotify_url} />
    </div>
  );
};

export default ArtistCard;