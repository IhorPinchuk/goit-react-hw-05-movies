import GalleryItem from './galleryItem/GalleryItem';
import css from './gallery.module.css';


const Gallery = ({ movies }) => {
  return (
    <ul className={css.home_gallery}>
      {movies.map(({ id, poster_path, title, name }) => {
        const image = `https://image.tmdb.org/t/p/original/${poster_path}`;
        return (
          <GalleryItem
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

export default Gallery;
