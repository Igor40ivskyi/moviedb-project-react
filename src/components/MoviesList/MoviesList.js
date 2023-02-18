import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {genresActions} from "../../redux/slices/genresSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {

    const dispatch = useDispatch();

    const {movies} = useSelector(state => state.movies);

    const {genres} = useSelector(state => state.genres);

    const moviesList = movies.results;

    useEffect(() => {
        dispatch(moviesActions.getAllMovies());
        dispatch(genresActions.getAllGenres());
    },[]);

    return (
        <div style={{display:'flex',flexWrap:'wrap',width:1000}}>
            {moviesList && moviesList.map(movie=><MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};