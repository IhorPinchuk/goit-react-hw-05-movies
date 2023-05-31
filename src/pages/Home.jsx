
import { useState, useEffect } from 'react';
import { fetchTrendMovies } from 'services/api';
import Gallery from 'components/gallery/Gallery';


const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    fetchTrendMovies()
      .then(response => setTrendMovies(response))
      .catch(error => {
        console.log(error);
      });
  }, []);
  return <Gallery movies={trendMovies} />;
};

export default Home;
