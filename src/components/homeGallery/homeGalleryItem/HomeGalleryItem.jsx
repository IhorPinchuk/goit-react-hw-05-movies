import { Link } from 'react-router-dom';
import css from './homeGalleryItem.module.css';

const HomeGalleryItem = ({ id, image, title, name }) => {
  return (
    <li className={css.home_gallery__item}>
      <Link
        to={`/movies/${id}`}
        className={css.home_gallery__link}
        image={image}
        title={title}
      >
        <img className={css.home_gallery__image} src={image} alt={title} />
        <p className={css.home_gallery__title}>{title ?? name}</p>
      </Link>
    </li>
  );
};

export default HomeGalleryItem;
