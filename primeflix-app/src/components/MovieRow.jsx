import { useState, useEffect } from "react";
import { getTrendingMovies } from "../api/movieApi";

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
        <img
          className="movie-poster"
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
          style={{ width: "150px", borderRadius: "8px" }}
        />
      ))}
    </div>
  );
}

export default MovieRow;
