import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {genresActions} from "../../redux/slices/genresSlice";
import {OneGenre} from "../OneGenre/OneGenre";

import css from './GenresList.module.css'

const GenresList = () => {

    const {genresList} = useSelector(state => state.genres);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getGenresList());
    },[]);


    return (
        <div style={{color: 'snow'}}>

            <div className={css.genresListBlock}>
                {genresList && genresList.map(genre => <OneGenre key={genre.id} genre={genre}/>)}
            </div>
        </div>
    );
};

export {GenresList};