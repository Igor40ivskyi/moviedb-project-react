import css from "../MoviesListCard/MoviesListCard.module.css";
import {PosterPreviewByGenreId} from "../PosterPreviewByGenreId/PosterPreviewByGenreId";
import ReactStars from "react-stars/dist/react-stars";

import style from './OneMovieByGenreId.css'
const OneMovieByGenreId = ({movieByGenreId}) => {

    const {id, original_language, original_title, poster_path, vote_average} = movieByGenreId;


    return (
        <div style={{background:'coral',margin:10,width:250,height:500}}>

            <div className={css.titleBlock}>{original_title}</div>

            <div>
                <PosterPreviewByGenreId key={id} poster_path={poster_path}/>
            </div>

            <div>
                <ReactStars count={10} size={27} value={vote_average}/>
            </div>
        </div>
    );
};

export {OneMovieByGenreId};