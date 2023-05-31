
import SearchbarMovies from "components/searchbarMovies/SearchbarMovies";
import { fetchSearchMovies } from "services/api";

const Movies = () => {
    
    

    const handleFormSubmit = searchName => {
fetchSearchMovies(searchName).then(response => console.log(response))
        // console.log(searchName)
    // setImageName(imageName);
  };

    return (
        <SearchbarMovies onSubmit={handleFormSubmit} />
    )
}

export default Movies;