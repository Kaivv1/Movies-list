import Movie from "./Movie";

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <ul className="movie-list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
};

export default MovieList;
