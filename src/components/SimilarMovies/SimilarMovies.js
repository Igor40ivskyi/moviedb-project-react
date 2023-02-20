import {useSelector} from "react-redux";

import {SimilarMovieCard} from "../SimilarMovieCard/SimilarMovieCard";
import css from './SimilarMovies.module.css'

const SimilarMovies = () => {

    const {similarMovies} = useSelector(state => state.movies);

    console.log(similarMovies);

    return (
        <div>
Similar Movies
            <div className={css.similarMoviesContainer}>
                {similarMovies && similarMovies.map(similarMovie=><SimilarMovieCard key={similarMovie.id} similarMovie={similarMovie}/>)}
            </div>
        </div>
    );
};

export {SimilarMovies};