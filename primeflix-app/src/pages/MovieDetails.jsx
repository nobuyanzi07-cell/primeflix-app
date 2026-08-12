import ScoreDial from "../components/ScoreDial";

function MovieDetails({ movie }) {
  return (
    <div>
      <div>
        <img src={movie.poster_path} alt={movie.title} />

        <div>
          <h1>{movie.title}</h1>

          <ScoreDial score={movie.vote_average} />

          <p>{movie.release_date}</p>
          <p>{movie.runtime}</p>
          <p>{movie.genres}</p>

          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
