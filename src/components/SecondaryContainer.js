import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className="bg-black">
        <div className="-mt-40 relative z-20">
          <MoviesList title={"Nowplaying"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Popular"} movies={movies.popularMovies} />
          <MoviesList title={"Action"} movies={movies.nowPlayingMovies} />
          <MoviesList title={"Drama"} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
