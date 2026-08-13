import { useState, useEffect } from "react";
import { getTrendingMovies } from "../api/movieApi";
import MovieCard from "./MovieCard";

function MovieRow() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const data = await getTrendingMovies();
      setMovies(data);
    }

    fetchMovies();
  }, []);

  return (
    <div className="movie-row">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieRow;