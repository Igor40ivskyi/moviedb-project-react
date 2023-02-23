import {moviesService} from "../../services/moviesService";

import css from './FoundMovies.module.css'

const FoundMovies = ({movie}) => {

    console.log(movie,'FOUND MOVIE');

    const {original_title,poster_path,backdrop_path} = movie;

    const fullPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div className={css.FoundMoviesCard}>
            {original_title}
            <div>
                <img style={{width: 200, height: 250}} src={fullPoster} alt={original_title}/>
            </div>
        </div>
    );
};

export {FoundMovies};