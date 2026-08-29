import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import MovieRow from "../components/MovieRow";
import StateBlock from "../components/StateBlock";
import {
  getTrendingMovies,
  getPopularMovies,
  getTopRatedMovies,
} from "../api/movieApi";

function Home() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    async function fetchTrending() {
      setLoading(true);
      setError(false);
      try {
        const movies = await getTrendingMovies();
        if (!cancelled) setTrending(movies);
      } catch {
        if (!cancelled) setError(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchTrending();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div>
      {!loading && !error && <Hero movie={trending[0]} />}

      <div className="container">
        {loading && <StateBlock type="loading" />}
        {!loading && error && <StateBlock type="error" />}
        {!loading && !error && (
          <MovieRow title="Trending This Week" movies={trending} />
        )}

        <MovieRow title="Popular" fetcher={getPopularMovies} />
        <MovieRow title="Top Rated" fetcher={getTopRatedMovies} />
      </div>
    </div>
  );
}

export default Home;