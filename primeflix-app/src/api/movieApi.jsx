const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchMovies(endpoint) {
  const separator = endpoint.includes("?") ? "&" : "?";
  const response = await fetch(`${BASE_URL}${endpoint}${separator}api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error(`TMDB request failed (${response.status})`);
  }

  const data = await response.json();
  return data.results ?? [];
}

export async function getTrendingMovies() {
  return fetchMovies("/trending/movie/week");
}

export async function getPopularMovies() {
  return fetchMovies("/movie/popular");
}

export async function getTopRatedMovies() {
  return fetchMovies("/movie/top_rated");
}

export async function searchMovies(query) {
  return fetchMovies(`/search/movie?query=${encodeURIComponent(query)}`);
}

export async function getMovieDetails(id) {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);

  if (!response.ok) {
    throw new Error(`TMDB request failed (${response.status})`);
  }

  return response.json();
}