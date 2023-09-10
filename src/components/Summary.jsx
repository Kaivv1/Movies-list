import { average } from "../helpers";

const Summary = ({ watched }) => {
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgRunTime = average(watched.map((movie) => movie.runtime));

  return (
    <div className="summary">
      <h3>Movies you watched</h3>
      <div>
        <p>
          <span>#️⃣</span>
          <span>{`${watched.length} ${
            watched.length === 1 ? "movie" : "movies"
          }`}</span>
        </p>
        <p>
          <span>⭐</span>
          <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{`${avgRunTime.toFixed(0)} min`}</span>
        </p>
      </div>
    </div>
  );
};

export default Summary;
