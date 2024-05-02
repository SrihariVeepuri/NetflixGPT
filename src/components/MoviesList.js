import MovieCard from "./MovieCard";

const MoviesList = ({ title, movies }) => {
  return (
    <div className="p-2">
      <h1 className="text-3xl py-3 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
