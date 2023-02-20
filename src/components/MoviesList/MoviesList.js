import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {moviesActions} from "../../redux/slices/moviesSlice";
import {genresActions} from "../../redux/slices/genresSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MoviesList.module.css'
import {useSearchParams} from "react-router-dom";

const MoviesList = () => {

    const dispatch = useDispatch();


    const {moviesList,page} = useSelector(state => state.movies);


    const {genres} = useSelector(state => state.genres);


    const [query,setQuery] = useSearchParams({page: '1'});



    useEffect(() => {

        dispatch(moviesActions.getAllMovies({page:query.get('page')}));

    },[query]);


    return (
        <div>
            <div style={{marginTop:300}} className={css.moviesListBlock}>
                {moviesList && moviesList.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
            <div>
                <button disabled={page === 1} onClick={() => setQuery(query=>({page:+query.get('page')-1}))}>PREV</button>

                <button onClick={()=>setQuery(query=>({page:+query.get('page')+1}))}>NEXT</button>
            </div>
        </div>
    );
};

export {MoviesList};