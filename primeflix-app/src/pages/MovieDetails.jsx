import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../api/movieApi";
import ScoreDial from "../components/ScoreDial";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchDetails() {
      const data = await getMovieDetails(id);
      setMovie(data);
    }
    fetchDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />

        <div>
          <h1>{movie.title}</h1>

          <ScoreDial score={movie.vote_average} />

          <p>{movie.release_date}</p>
          <p>{movie.runtime} min</p>
         <div className="genre-pills">
              {movie.genres?.map((g) => (
              <span key={g.id} className="genre-pill">{g.name}</span>
              ))}
        </div>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;