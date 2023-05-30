import axios from "axios";

const BASE_URL =  'https://api.themoviedb.org/3/';
const API_KEY = '6a0c01f57c7aac7238ef2830c0821332';

export const fetchTrendMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;
  return await axios
    .get(url)
    .then(response => {
      return response.data.results;
    })
    .catch(error => console.log(error));
}