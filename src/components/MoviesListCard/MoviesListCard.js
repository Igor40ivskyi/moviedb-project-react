import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {genresService} from "../../services/genresService";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux/slices/moviesSlice";


import ReactStars from "react-stars/dist/react-stars";

const MoviesListCard = ({movie}) => {

    const {id, original_language, original_title,poster_path,vote_average} = movie;


    const navigate = useNavigate();

    const dispatch = useDispatch();

   async function similarGenres(id) {
       dispatch(moviesActions.getSimilarMovies({id}));
       navigate('/similar');
   }


    const info = () => {
        dispatch(moviesActions.pickMovie(movie))
        navigate('/info');
    };

    return (
        <div onClick={info} className={css.card}>

            <div className={css.titleBlock}>{original_title}</div>
            <div>
                <PosterPreview key={id} poster_path={poster_path}/>
            </div>
            <div>
                    <ReactStars count={10} size={27} value={vote_average}/>
            </div>
            <button className={css.getSimilarButton} onClick={() => similarGenres(id)}>GET SIMILAR MOVIES</button>
        </div>
    );
};

export {MoviesListCard};