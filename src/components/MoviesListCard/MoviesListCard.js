import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {genresService} from "../../services/genresService";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux/slices/moviesSlice";

const MoviesListCard = ({movie}) => {
    const {id, original_language, original_title,poster_path} = movie;

    const navigate = useNavigate();

    const dispatch = useDispatch();

   async function similarGenres(id) {
       dispatch(moviesActions.getSimilarMovies({id}));
       navigate('/similar');
   }



    return (
        <div className={css.card}>
            <div>original_title {original_title}</div>
            <div>
                <PosterPreview key={id} poster_path={poster_path}/>
            </div>

            <button onClick={()=>similarGenres(id)}>SIMILAR MOVIES</button>
        </div>
    );
};

export {MoviesListCard};