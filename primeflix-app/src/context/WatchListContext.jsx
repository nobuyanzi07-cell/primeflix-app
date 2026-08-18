import { createContext, useContext, useState } from "react";

const WatchListContext = createContext();

export function WatchListProvider({ children }) {
  const [watchList, setWatchList] = useState([]);

  const addToWatchList = (movie) => {
    setWatchList([...watchList, movie]);
  };

  const removeFromWatchList = (id) => {
    setWatchList(watchList.filter((movie) => movie.id !== id));
  };

  return (
    <WatchListContext.Provider
      value={{ watchList, addToWatchList, removeFromWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
}

export function useWatchList() {
  return useContext(WatchListContext);
}