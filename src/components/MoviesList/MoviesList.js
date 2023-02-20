import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {moviesActions} from "../../redux/slices/moviesSlice";
import {genresActions} from "../../redux/slices/genresSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MoviesList.module.css'

const MoviesList = () => {

    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);

    const {moviesList,page} = useSelector(state => state.movies);

    const {genres} = useSelector(state => state.genres);


    useEffect(() => {

        dispatch(moviesActions.getAllMovies({currentPage}));

    },[currentPage]);

    return (
        <div>
            <div className={css.moviesListBlock}>
                {moviesList && moviesList.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage => currentPage - 1)}>PREV</button>
                <button disabled={currentPage === 37152} onClick={()=>setCurrentPage(currentPage=>currentPage+1)}>NEXT</button>
            </div>
        </div>
    );
};

export {MoviesList};