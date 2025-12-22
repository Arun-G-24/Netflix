import React, { useEffect, useState } from 'react';
import MovieCard from '../Movie/moviecard';
import axios from 'axios';

const API_KEY = "9754046ddb30d948afc10b750e24aed9";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function Movies() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (type, setState) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`
      );
      setState(response.data.results);
    } catch (err) {
      setError("Failed to load movies");
    }
  };

  useEffect(() => {
    setLoading(true);
    setError(null);

    // Fetch all movies in parallel
    Promise.all([
      fetchMovies("popular", setPopularMovies),
      fetchMovies("top_rated", setTopRatedMovies),
      fetchMovies("upcoming", setUpcomingMovies),
    ])
      .catch((err) => setError("Failed to load some movie types"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <h2 className="text-white text-center">Loading...</h2>;
  if (error) return <h2 className="text-danger text-center">{error}</h2>;

  return (
    <>
      <div id="intro">
        <iframe
          width="100%"
          height="615"
          className="mt-0 rounded"
          src="https://www.youtube.com/embed/nb_fFj_0rq8?autoplay=1&mute=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <div className="container mt-5">
        <h4 className="text-white mb-5">Popular Movies</h4>
        <div className="d-flex gap-4 overflow-auto movie-row">
          {popularMovies.map((movie) => (
            <MovieCard
              key={movie?.id}
              title={movie?.title}
              image={IMAGE_URL + movie.poster_path}
              release={movie.release_date}
            />
          ))}
          <button className="b-1">❯</button>
        </div>

        <h4 className="text-white mb-5 mt-5">Top Rated Movies</h4>
        <div className="d-flex gap-3 overflow-auto movie-row">
          {topRatedMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={IMAGE_URL + movie.poster_path}
              release={movie.release_date}
            />
          ))}
          <button className="b-2">❯</button>
        </div>

        <h4 className="text-white mb-5 mt-5">Upcoming Movies</h4>
        <div className="d-flex gap-3 overflow-auto movie-row">
          {upcomingMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title}
              image={IMAGE_URL + movie.poster_path}
              release={movie.release_date}
            />
          ))}
        </div>
        <button className="b-3">❯</button>
      </div>
    </>
  );
}

export default Movies;
