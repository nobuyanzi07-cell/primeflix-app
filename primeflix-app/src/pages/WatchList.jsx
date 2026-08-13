import { useWatchList } from "../context/WatchListContext";

function Watchlist() {
  const { watchList, removeFromWatchList } = useWatchList();

  return (
    <div>
      <h1>My Watchlist</h1>

      {watchList.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        watchList.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>

            <button onClick={() => removeFromWatchList(movie.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Watchlist;