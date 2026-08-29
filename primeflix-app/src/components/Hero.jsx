import { Link } from "react-router-dom";

function Hero({ movie }) {
  if (!movie) return null;

  return (
    <div
      className="hero"
      style={{
        backgroundImage: movie.backdrop_path
          ? `linear-gradient(180deg, rgba(11,11,15,0.2), #0b0b0f), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : undefined,
      }}
    >
      <div className="container hero-inner">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <Link to={`/movie/${movie.id}`} className="hero-cta">
          View details
        </Link>
      </div>
    </div>
  );
}

export default Hero;