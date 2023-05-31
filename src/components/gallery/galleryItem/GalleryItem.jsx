import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import css from './galleryItem.module.css';

const GalleryItem = ({ id, image, title, name }) => {
  const location = useLocation();
  return (
    <li className={css.gallery__item}>
      <Link
        state={{ from: location }}
        to={`/movies/${id}`}
        className={css.gallery__link}
        image={image}
        title={title}
      >
        <img className={css.gallery__image} src={image} alt={title} />
        <p className={css.gallery__title}>{title ?? name}</p>
      </Link>
    </li>
  );
};

GalleryItem.propTypes = {
  id: propTypes.number.isRequired,
  image: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  name: propTypes.string,
};

export default GalleryItem;
