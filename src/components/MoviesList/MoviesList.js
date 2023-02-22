import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";

import {moviesActions} from "../../redux/slices/moviesSlice";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MoviesList.module.css'

import {useSearchParams} from "react-router-dom";
import {GenresList} from "../GenresList/GenresList";
import {FoundMovies} from "../FoundMovies/FoundMovies";

const MoviesList = () => {

    const ref = useRef();

    const dispatch = useDispatch();

    const {moviesList,page,moviesByKeyword} = useSelector(state => state.movies);
    console.log(moviesByKeyword);

    const [query,setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(moviesActions.getAllMovies({page: query.get('page')}));
    }, [query]);

    const searchMovies = () => {
          const keyword = ref.current.value
        console.log(keyword);
        dispatch(moviesActions.getMoviesByKeyword({keyword}))
    };

    return (
        <div>
            <div>
                <input style={{width: 800, height: 25, marginLeft: 400, marginTop: 50}} type="text"
                       placeholder={'search'} ref={ref}/>
                <button onClick={searchMovies}>search</button>
            </div>

            {moviesByKeyword && <div style={{height:500}}>
                {moviesByKeyword && moviesByKeyword.map(movie => <FoundMovies key={movie.id} movie={movie}/>)}
            </div>}

            <div style={{display: 'flex'}}>

                <div className={css.moviesListBlock}>
                    {moviesList && moviesList.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                </div>
                <div>
                    <GenresList/>
                </div>
            </div>

            <div>
                <button className={css.prevButton} disabled={page === 1}
                        onClick={() => setQuery(query => ({page: +query.get('page') - 1}))}>&larr;</button>

                <button className={css.nextButton}
                        onClick={() => setQuery(query => ({page: +query.get('page') + 1}))}>&rarr;</button>
            </div>
        </div>
    );
};

export {MoviesList};