import css from './MoviesByGenreIdList.module.css'
import {useDispatch, useSelector} from "react-redux";
import {OneMovieByGenreId} from "../OneMovieByGenreId/OneMovieByGenreId";
import {useSearchParams} from "react-router-dom";
import {useEffect} from "react";
import {genresActions} from "../../redux/slices/genresSlice";

const MoviesByGenreIdList = () => {

    const {moviesByGenreId} = useSelector(state => state.genres);

    const [query,setQuery] = useSearchParams({genreId: 35});

    const id = +query.get('genreId');

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getMoviesByGenreId({id}))
    },[]);

    return (
        <div >
            MoviesByGenreIdList
            <div className={css.moviesListBlock}>
                {moviesByGenreId && moviesByGenreId.map(movieByGenreId=><OneMovieByGenreId key={movieByGenreId.id} movieByGenreId={movieByGenreId}/>)}
            </div>
        </div>
    );
};

export {MoviesByGenreIdList};