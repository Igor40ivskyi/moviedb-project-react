import css from './MoviesByGenreIdList.module.css'
import {useSelector} from "react-redux";
import {OneMovieByGenreId} from "../OneMovieByGenreId/OneMovieByGenreId";

const MoviesByGenreIdList = () => {

    const {moviesByGenreId} = useSelector(state => state.genres);

    return (
        <div className={css.moviesListBlock}>
            MoviesByGenreIdList
            <div>
                {moviesByGenreId && moviesByGenreId.map(movieByGenreId=><OneMovieByGenreId key={movieByGenreId.id} movieByGenreId={movieByGenreId}/>)}
            </div>
        </div>
    );
};

export {MoviesByGenreIdList};