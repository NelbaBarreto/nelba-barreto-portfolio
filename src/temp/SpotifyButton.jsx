import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'

const SpotifyButton = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="p-2 border border-[#1DB954] font-semibold text-[#1DB954] rounded-lg hover:bg-[#1DB954] hover:text-white flex items-center justify-center space-x-2"
    >
      <span className="text-lg sm:text-base">
        <FontAwesomeIcon icon={faSpotify} />
      </span>
      <span className="text-sm">Listen on Spotify</span>
    </a>
  )
}

export default SpotifyButton;