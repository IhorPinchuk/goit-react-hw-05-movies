import MovieDetailsMarkup from 'components/movieDetailsMarkup/MovieDetailsMarkup';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'services/api';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const image = `https://image.tmdb.org/t/p/original/${movieDetails.poster_path}`;

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(response => setMovieDetails(response))
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return <MovieDetailsMarkup movieDetails={movieDetails} image={image} />;
};

export default MovieDetails;
