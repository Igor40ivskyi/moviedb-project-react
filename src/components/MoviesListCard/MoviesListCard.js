import css from './MoviesListCard.module.css'
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {genresService} from "../../services/genresService";
import {useNavigate} from "react-router-dom";

const MoviesListCard = ({movie}) => {
    const {id, original_language, original_title,poster_path} = movie;

    const navigate = useNavigate();

   async function similarGenres(id) {
       const {data} = await genresService.getSimilar(id);
       navigate('/similar');
   }



    return (
        <div className={css.card}>
            <div>id {id}</div>
            <div>original_language {original_language}</div>
            <div>original_title {original_title}</div>
            <div>
                <PosterPreview key={id} poster_path={poster_path}/>
            </div>

            <button onClick={()=>similarGenres(id)}>GET SIMILAR GENRES</button>
        </div>
    );
};

export {MoviesListCard};