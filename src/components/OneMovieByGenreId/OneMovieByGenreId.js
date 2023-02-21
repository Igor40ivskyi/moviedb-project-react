import css from "../MoviesListCard/MoviesListCard.module.css";
import {PosterPreviewByGenreId} from "../PosterPreviewByGenreId/PosterPreviewByGenreId";
import ReactStars from "react-stars/dist/react-stars";

const OneMovieByGenreId = ({movieByGenreId}) => {

    const {id, original_language, original_title, poster_path, vote_average} = movieByGenreId;

    console.log(movieByGenreId);

    return (
        <div>
            OneMovieByGenreId
            <div className={css.titleBlock}>{original_title}</div>
        <div>
            <PosterPreviewByGenreId key={id} poster_path={poster_path}  />
        </div>

            <div>
                <ReactStars count={10} size={27} value={vote_average}/>
            </div>
        </div>
    );
};

export {OneMovieByGenreId};