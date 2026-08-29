import { useWatchList } from "../context/WatchListContext";
import MovieCard from "../components/MovieCard";

function Watchlist() {
  const { watchList, removeFromWatchList } = useWatchList();

  return (
    <main className="container watchlist-page">
      <h1>My Watchlist</h1>

      {watchList.length === 0 ? (
        <div className="empty-state">
          <h2>Your watchlist is empty.</h2>
          <p>Add movies you want to remember.</p>
        </div>
      ) : (
        <div className="search-results">
          {watchList.map((movie) => (
            <div className="search-card" key={movie.id}>
              <MovieCard movie={movie} />
              <button
                className="watchlist-button"
                onClick={() => removeFromWatchList(movie.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Watchlist;