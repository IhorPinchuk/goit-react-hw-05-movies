import { Link } from "react-router-dom";
import css from './homeGallery.module.css'



const HomeGallery = ({trendMovies}) => {
    
    return (
        <ul className={css.home_gallery}>
                {trendMovies.map(movie => {
                    const poster_path = `https://image.tmdb.org/t/p/original/${movie.poster_path}`;
                    return <li
                        key={movie.id}
                        className={css.home_gallery__item}
                            >
                                <Link to={`/movies/${movie.id}`}>
                                    <img className={css.home_gallery__image}  src={poster_path} alt={movie.title} />
                                    <p className={css.home_gallery__title}>{movie.title ?? movie.name}</p>
                                </Link>
                            </li>
                })
                }
            </ul>
    )
    
}

export default HomeGallery;