import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {moviesActions} from "../../redux/slices/moviesSlice";
import {MovieInfoFullData} from "../MovieInfoFullData/MovieInfoFullData";
import {Trailer} from "../Trailer/Trailer";

import css from './MovieInfo.module.css'

const MovieInfo = () => {
    const id = localStorage.getItem('pickedMovieId');
    const movie_id = +id;

    const {movieById,videosByMovieId} = useSelector(state => state.movies);



    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMovieById({id}))
        dispatch(moviesActions.getVideoByMovieId({movie_id}))
    },[]);

    return (
        <div>

            <div className={css.trailerBlock}>

                <div>

                    {movieById && <MovieInfoFullData key={movieById.id} movieById={movieById}/>}
                </div>

                {videosByMovieId && <Trailer videosByMovieId={videosByMovieId}/>}
            </div>

        </div>
    );
};

export {MovieInfo};