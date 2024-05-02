import { CDN_IMG_URL } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img src={CDN_IMG_URL + posterPath} alt="poster" />
    </div>
  );
};

export default MovieCard;
