import css from './MovieInfoFullData.module.css'
import {GenreBadge} from "../GenreBadge/GenreBadge";

const MovieInfoFullData = ({movieById}) => {

    const {poster_path, original_title,budget,original_language,overview,production_companies,production_countries,
    release_date,revenue,runtime,status,vote_average,genres,backdrop_path} = movieById;



    const fullPoster = `https://image.tmdb.org/t/p/w500${backdrop_path}`;


    return (
        <div>
            <div className={css.movie_info_card}>
                <div>
                    <img src={fullPoster} alt={original_title}/>
                </div>
                <div className={css.textSection}>
                    <div className={css.textSectionSlice}>
                    {original_title}
                    </div>
                    <div className={css.textSectionSlice}>
                        {overview}
                    </div>
                    <div className={css.textSectionSlice}>
                        Budget - ${budget}
                    </div>
                    <div className={css.textSectionSlice}>
                        Language - {original_language}
                    </div>
                    <div className={css.textSectionSlice}>
                        Date of release - {release_date}
                    </div>
                    <div className={css.textSectionSlice}>
                        Rating - {vote_average}
                    </div>
                    <div className={css.textSectionSlice}>
                        Revenue - {revenue}
                    </div>
                    <div className={css.textSectionSlice}>
                        Runtime - {runtime} minutes
                    </div>
                    <div className={css.textSectionSlice}>
                        Status - {status}
                    </div>
                    <div>
                        <GenreBadge genres={genres}/>
                    </div>





                </div>
            </div>
        </div>
    );
};

export {MovieInfoFullData};