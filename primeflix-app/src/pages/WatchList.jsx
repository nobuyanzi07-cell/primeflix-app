import { useWatchlist } from "../context/WatchlistContext";

function Watchlist() {
  const { watchlist, removeFromWatchlist } = useWatchlist();

  return (
    <div>
      <h1>My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        watchlist.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>

            <button onClick={() => removeFromWatchlist(movie.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Watchlist;