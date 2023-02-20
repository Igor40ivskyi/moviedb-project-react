import {SimilarPosterPreview} from "../SimilarPosterPreview/SimilarPosterPreview";

import css from './SimilarMoviesCard.module.css'

const SimilarMovieCard = ({similarMovie}) => {

    const {original_title, poster_path,id} = similarMovie;

    return (
        <div className={css.similarMoviesCard}>
            <div>
                {original_title}
            </div>
            <div>
                <SimilarPosterPreview key={id} poster_path={poster_path} original_title={original_title}/>
            </div>
        </div>
    );
};

export {SimilarMovieCard};