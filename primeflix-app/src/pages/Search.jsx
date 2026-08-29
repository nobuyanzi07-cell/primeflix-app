import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useWatchList } from "../context/WatchListContext";
import { searchMovies } from "../api/movieApi";
import MovieCard from "../components/MovieCard";
import StateBlock from "../components/StateBlock";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get("q") || "";

  const [search, setSearch] = useState(initialQuery);
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { addToWatchList, isInWatchList } = useWatchList();

  const runSearch = async (term) => {
    if (!term.trim()) return;

    setLoading(true);
    setError(false);

    try {
      const results = await searchMovies(term);
      setMovies(results);
      setHasSearched(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  // Auto-run search when arriving from the navbar with ?q=
  useEffect(() => {
    if (initialQuery) {
      runSearch(initialQuery);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(search.trim() ? { q: search.trim() } : {});
    runSearch(search);
  };

  return (
    <main className="search-page">
      <div className="container">
        <h1>Search Movies</h1>

        <form className="search-form" onSubmit={handleSubmit}>
          <input
            className="search-input"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search movie"
          />

          <button className="search-button" type="submit">
            Search
          </button>
        </form>

        {loading && <StateBlock type="loading" />}
        {!loading && error && <StateBlock type="error" />}
        {!loading && !error && hasSearched && movies.length === 0 && (
          <StateBlock type="empty" />
        )}

        {!loading && !error && movies.length > 0 && (
          <div className="search-results">
            {movies.map((movie) => (
              <div className="search-card" key={movie.id}>
                <MovieCard movie={movie} />

                <button
                  className="watchlist-button"
                  disabled={isInWatchList(movie.id)}
                  onClick={() => addToWatchList(movie)}
                >
                  {isInWatchList(movie.id) ? "In Watchlist" : "Add to Watchlist"}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

export default Search;