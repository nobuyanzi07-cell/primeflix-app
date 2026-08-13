import { useState } from "react";
import { useWatchList } from "../context/WatchListContext";

function Search() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const { addToWatchList } = useWatchList();

  const searchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${search}`
    );
    const data = await res.json();
    setMovies(data.results);
  };

  return (
    <div>
      <h1>Search Movies</h1>

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search movie"
      />

      <button onClick={searchMovies}>Search</button>

      {movies.map((movie) => (
        <div key={movie.id}>
          <h3>{movie.title}</h3>
          <button onClick={() => addToWatchList(movie)}>
            Add to Watchlist
          </button>
        </div>
      ))}
    </div>
  );
}

export default Search;