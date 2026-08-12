import { useState, useEffect } from "react";
import { getTrendingMovies } from "../api/movieApi";

function Hero() {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovie() {
      const movies = await getTrendingMovies();
      setMovie(movies[0]);
    }
    fetchMovie();
  }, []);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
    </div>
  );
}

export default Hero;