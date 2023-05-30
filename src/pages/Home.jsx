import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'services/api';
import HomeGallery from 'components/homeGallery/HomeGallery';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies()
      .then(response => setTrendMovies(response))
      .catch(error => {
        console.log(error);
      });
  }, []);
  return <HomeGallery trendMovies={trendMovies} />;
};

export default Home;
