
import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'services/api';
import Gallery from 'components/gallery/Gallery';
import { useLocation } from 'react-router-dom';


const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const locationHome = useLocation();

  useEffect(() => {
    fetchTrendMovies()
      .then(response => setTrendMovies(response))
      .catch(error => {
        console.log(error);
      });
  }, []);

  return <Gallery movies={trendMovies} location={ locationHome} />;
};

export default Home;
