import { useState } from "react";
import { useWatchList } from "../context/WatchListContext";
import MovieCard from "../components/MovieCard";

function Search() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const { addToWatchList } = useWatchList();

  const searchMovies = async () => {
    if (!search.trim()) return;

    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        import.meta.env.VITE_TMDB_API_KEY
      }&query=${encodeURIComponent(search)}`
    );

    const data = await res.json();
    setMovies(data.results);
    setHasSearched(true);
  };

  return (
    <main className="search-page">
      <div className="container">
        <h1>Search Movies</h1>

        <form
          className="search-form"
          onSubmit={(e) => {
            e.preventDefault();
            searchMovies();
          }}
        >
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

        {hasSearched && movies.length === 0 ? (
          <div className="empty-state">
            <h2>No results found.</h2>
            <p>Try a different title or check your spelling.</p>
          </div>
        ) : (
          <div className="search-results">
            {movies.map((movie) => (
              <div className="search-card" key={movie.id}>
                <MovieCard movie={movie} />

                <button
                  className="watchlist-button"
                  onClick={() => addToWatchList(movie)}
                >
                  Add to Watchlist
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