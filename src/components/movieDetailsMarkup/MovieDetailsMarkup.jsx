import { Link, Outlet } from 'react-router-dom';
import css from './movieDetailsMarkup.module.css';

const MovieDetailsMarkup = ({ movieDetails, image, locationDetails }) => {
 
  return (
    <>
      <Link to={locationDetails.state }>
        <button className={css.btn_back} type="button">
          Go back
        </button>
      </Link>
      <div className={css.movie_details__wrapper__card}>
        <img
          className={css.movie_details__img}
          src={image}
          alt={movieDetails.original_title}
        />
        <div>
          <h2>
            {movieDetails.title} ({movieDetails.release_date})
          </h2>

          <p>
            User Score:
            {movieDetails.vote_average}%
          </p>
          <h3>Overview</h3>
          <p>{movieDetails.overview}</p>
          <h4>Genres</h4>
          <p>
            {movieDetails.genres
              ? movieDetails.genres.map(genre => genre.name).join(' ')
              : ''}
          </p>
        </div>
      </div>

      <p className={css.information_text}>Additional information</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>        
      </ul>
      <Outlet />
    </>
  );
};

export default MovieDetailsMarkup;
