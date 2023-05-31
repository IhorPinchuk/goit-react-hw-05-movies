import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from 'react-router-dom';
import SearchbarMovies from 'components/searchbarMovies/SearchbarMovies';
import { fetchSearchMovies } from 'services/api';
import Gallery from 'components/gallery/Gallery';

const Movies = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    fetchSearchMovies(searchParams.get('query'))
      .then(response => setSearchMovies(response))
      .catch(error => {
        console.log(error);
      });
  }, [searchParams]);

  const handleFormSubmit = searchName => {
    setSearchParams({ query: searchName });
  };

  return (
    <>
      <SearchbarMovies onSubmit={handleFormSubmit} />

      <Gallery movies={searchMovies} />

      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        theme="colored"
      />
    </>
  );
};

export default Movies;
