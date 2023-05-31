import { useState } from 'react';
import { toast } from 'react-toastify';
import propTypes from 'prop-types';
import css from './searchbarMovies.module.css';

const SearchbarMovies = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = e => {
    setSearchName(e.currentTarget.value.toLowerCase());
    //   console.log(searchName)
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (searchName.trim() === '') {
      return toast.info('Enter the name');
    }

    onSubmit(searchName);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        name="searchName"
        value={searchName}
        onChange={handleNameChange}
        autoComplete="off"
        autoFocus
        placeholder="Search"
      />
      <button type="submit">
        <span>Search</span>
      </button>
    </form>
  );
};

SearchbarMovies.propTypes = {
  onSubmit: propTypes.func,
};

export default SearchbarMovies;
