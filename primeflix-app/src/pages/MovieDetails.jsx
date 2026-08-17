import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../api/movieApi";
import ScoreDial from "../components/ScoreDial";
import StateBlock from "../components/StateBlock";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchDetails() {
      setLoading(true);
      setError(false);
      try {
        const data = await getMovieDetails(id);
        if (!data) throw new Error("Not found");
        setMovie(data);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchDetails();
  }, [id]);

  if (loading) return <StateBlock type="loading" />;
  if (error) return <StateBlock type="error" />;
  if (!movie) return <StateBlock type="empty" />;

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