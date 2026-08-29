import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import StateBlock from "./StateBlock";

function MovieRow({ title, fetcher, movies: preloadedMovies }) {
  const isPreloaded = preloadedMovies !== undefined;
  const [movies, setMovies] = useState(isPreloaded ? preloadedMovies : []);
  const [loading, setLoading] = useState(!isPreloaded);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isPreloaded) {
      setMovies(preloadedMovies);
      return;
    }

    let cancelled = false;
    async function fetchMovies() {
      setLoading(true);
      setError(false);
      try {
        const data = await fetcher();
        if (!cancelled) setMovies(data);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchMovies();

    return () => {
      cancelled = true;
    };
  }, [fetcher, isPreloaded, preloadedMovies]);

  return (
    <section className="home-section">
      {title && <h2 className="section-title">{title}</h2>}

      {loading && <StateBlock type="loading" />}
      {!loading && error && <StateBlock type="error" />}
      {!loading && !error && movies.length === 0 && <StateBlock type="empty" />}

      {!loading && !error && movies.length > 0 && (
        <div className="movie-row">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </section>
  );
}

export default MovieRow;