import { useEffect, useState } from "react";
import { KEY } from "../helpers";
import BackArrow from "../ui/BackArrow";
import StarRating from "../ui/StarRating";
import Loading from "../ui/Loading";

const MovieDetails = ({
  selectedId,
  onCloseMovie,
  onSetWatchedMovies,
  watched,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);

  const userRatedMovie = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Director: director,
    imdbRating,
    Poster: poster,
    Plot: plot,
    Genre: genre,
    Title: title,
    Runtime: runtime,
    Actors: actors,
    Released: released,
    Type: type,
  } = movie;

  const handleAddMovie = () => {
    const watchedMovie = {
      imdbID: selectedId,
      runtime: isNaN(+runtime.split(" ").at(0)) ? 0 : +runtime.split(" ").at(0),
      userRating,
      title,
      imdbRating: isNaN(+imdbRating) ? 0 : +imdbRating,
      poster,
      type: type,
    };
    onSetWatchedMovies(watchedMovie);
    onCloseMovie();
  };

  useEffect(() => {
    async function fetchMovie() {
      setIsLoading(true);
      const res = await fetch(
        `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`
      );

      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    fetchMovie();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;

    document.title = `${title} | Movie`;

    return function () {
      document.title = "Movie List";
    };
  }, [title]);

  useEffect(() => {
    function callback(e) {
      if (e.code === "Escape") {
        onCloseMovie();
      }
    }
    document.addEventListener("keydown", callback);

    return function () {
      document.removeEventListener("keydown", callback);
    };
  }, [onCloseMovie]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="movie-container">
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              <BackArrow />
            </button>
            <img src={poster} alt={`Poster for movie ${title}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>{genre}</p>
              <p>
                {`📅 ${released}`} &bull; {`⌛ ${runtime}`}
              </p>
              <div>
                <p>{`${actors}`}</p>
              </div>
              <p>{`⭐ ${imdbRating} IMDB rating`}</p>
            </div>
          </header>

          <section>
            <div className="star-rating">
              {!isWatched ? (
                <>
                  <StarRating
                    maxRating={10}
                    size={30}
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAddMovie}>
                      + Add to list
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You have already rated this movie with{" "}
                  {`${userRatedMovie} 🌟`}
                </p>
              )}
            </div>
            <div style={{ margin: "10px 0px" }}>
              <p>
                <em>{plot}</em>
              </p>
            </div>
            <p>{`Directed by ${director}`}</p>
          </section>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
