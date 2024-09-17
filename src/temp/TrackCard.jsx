import SpotifyButton from "./SpotifyButton";

const TrackCard = ({ item, index }) => {
  // Función para convertir la duración de milisegundos a minutos y segundos
  const formatDuration = (ms) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="bg-gray-900 p-4 rounded-lg shadow-md">
      <img
        src={item.image_url}
        alt={item.track_name}
        className="w-full h-auto object-cover rounded-md mb-4"
      />
      <h3 className="text-white text-xl font-bold mb-2">
        <span className="text-purple-500">#{index + 1}</span> {item.track_name}
      </h3>
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
      <SpotifyButton url={item.spotify_url} />
    </div>
  );
};

export default TrackCard;