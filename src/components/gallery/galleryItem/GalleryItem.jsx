import { Link } from 'react-router-dom';
import css from './galleryItem.module.css';

const GalleryItem = ({ id, image, title, name, location }) => {
  
  return (
    <li className={css.gallery__item}>
      <Link
        to={`/movies/${id}`}
        className={css.gallery__link}
        image={image}
        title={title}
        state={location}
      >
        <img className={css.gallery__image} src={image} alt={title} />
        <p className={css.gallery__title}>{title ?? name}</p>
      </Link>
    </li>
  );
};

export default GalleryItem;
