import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../api/movieApi";
import { useWatchList } from "../context/WatchListContext";
import ScoreDial from "../components/ScoreDial";
import StateBlock from "../components/StateBlock";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { addToWatchList, removeFromWatchList, isInWatchList } = useWatchList();

  useEffect(() => {
    let cancelled = false;
    async function fetchDetails() {
      setLoading(true);
      setError(false);
      try {
        const data = await getMovieDetails(id);
        if (!data) throw new Error("Not found");
        if (!cancelled) setMovie(data);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchDetails();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) return <StateBlock type="loading" />;
  if (error) return <StateBlock type="error" />;
  if (!movie) return <StateBlock type="empty" />;

  const inWatchList = isInWatchList(movie.id);

  return (
    <div className="container movie-details">
      <img
        className="movie-details-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <div className="movie-details-info">
        <h1>{movie.title}</h1>

        <ScoreDial score={movie.vote_average} />

        <p className="movie-details-meta">
          {movie.release_date} &bull; {movie.runtime} min
        </p>

        <div className="genre-pills">
          {movie.genres?.map((g) => (
            <span key={g.id} className="genre-pill">
              {g.name}
            </span>
          ))}
        </div>

        <p className="movie-details-overview">{movie.overview}</p>

        <button
          className="watchlist-button"
          onClick={() =>
            inWatchList ? removeFromWatchList(movie.id) : addToWatchList(movie)
          }
        >
          {inWatchList ? "Remove from Watchlist" : "Add to Watchlist"}
        </button>
      </div>
    </div>
  );
}

export default MovieDetails;