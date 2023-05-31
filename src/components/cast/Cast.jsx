import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchCast } from 'services/api';
import CastMarkup from './castMarkup/CastMarkup';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    fetchCast(movieId)
      .then(response => setCast(response))
      .catch(error => {
        console.log(error);
      });
  }, [movieId]);

  return (
    <ul>
      {cast.map(({ id, name, profile_path }) => {
        const image = `https://image.tmdb.org/t/p/w300_and_h450_bestv2/${profile_path}`;
        return <CastMarkup key={id} name={name} image={image} />;
      })}
    </ul>
  );
};

export default Cast;
