import { createContext, useContext, useState } from "react";

const WatchListContext = createContext();

export function WatchlistProvider({ children }) {
  const [watchlist, setWatchlist] = useState([]);
  return (
    <WatchListContext.Provider value={{ watchlist, setWatchlist }}>
      {children}
    </WatchListContext.Provider>
  );
}

export function useWatchlist() {
  return useContext(WatchListContext);
}