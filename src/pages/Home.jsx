import { useState, useEffect } from "react";
import { fetchTrendMoves } from "services/api";
import HomeGallery from "components/homeGallery/HomeGallery";



const Home = () => {
    const [trendMovies, setTrendMovies] = useState([]);
    // fetchTrendMoves().then(movies => movies.map(movie => {return {}}));

     useEffect(() => {
            fetchTrendMoves()
                .then(response => setTrendMovies(response))
                .catch(error => { console.log(error) });
    }, []);
    return (
        <HomeGallery trendMovies={trendMovies } />
    )
};

export default Home;
