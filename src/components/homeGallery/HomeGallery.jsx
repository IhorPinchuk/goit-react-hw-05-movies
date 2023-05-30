import css from './homeGallery.module.css';
import HomeGalleryItem from './homeGalleryItem/HomeGalleryItem';

const HomeGallery = ({ trendMovies }) => {
  return (
    <ul className={css.home_gallery}>
      {trendMovies.map(({ id, poster_path, title, name }) => {
        const image = `https://image.tmdb.org/t/p/original/${poster_path}`;
        return (
          <HomeGalleryItem
            key={id}
            id={id}
            image={image}
            title={title}
            name={name}
          />
        );
      })}
    </ul>
  );
};

export default HomeGallery;
