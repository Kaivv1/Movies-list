const WatchedMovie = ({ movie, onDeleteWatched }) => {
  return (
    <li>
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p
        style={{
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: "0.8rem",
        }}
      >
        {movie.type}
      </p>
      <div className="watched-details">
        <p>
          <span>⭐</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⌛</span>
          <span>{`${movie.runtime} min`}</span>
        </p>
      </div>
      <button className="del-btn" onClick={() => onDeleteWatched(movie.imdbID)}>
        ✕
      </button>
    </li>
  );
};

export default WatchedMovie;
