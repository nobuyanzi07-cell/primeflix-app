import { Link } from "react-router-dom";
import ScoreDial from "./ScoreDial";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <ScoreDial score={movie.vote_average} />
    </Link>
  );
}

export default MovieCard;