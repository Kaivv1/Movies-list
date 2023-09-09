const Movie = ({ movie, onSelectMovie }) => {
  console.log(movie.imdbID);
  return (
    <li onClick={() => onSelectMovie(movie.imdbID)}>
      <img src={movie.Poster} alt={movie.Title} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🎥</span>
          <span>{movie.Year}</span>
        </p>
      </div>
      <div>
        <p className="type">{movie.Type}</p>
      </div>
    </li>
  );
};

export default Movie;
