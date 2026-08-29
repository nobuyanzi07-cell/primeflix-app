import { createContext, useContext, useState, useEffect } from "react";

const WatchListContext = createContext();
const STORAGE_KEY = "primeflix-watchlist";

export function WatchListProvider({ children }) {
  const [watchList, setWatchList] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(watchList));
  }, [watchList]);

  const addToWatchList = (movie) => {
    setWatchList((prev) =>
      prev.some((m) => m.id === movie.id) ? prev : [...prev, movie]
    );
  };

  const removeFromWatchList = (id) => {
    setWatchList((prev) => prev.filter((movie) => movie.id !== id));
  };

  const isInWatchList = (id) => watchList.some((movie) => movie.id === id);

  return (
    <WatchListContext.Provider
      value={{ watchList, addToWatchList, removeFromWatchList, isInWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
}

export function useWatchList() {
  return useContext(WatchListContext);
}