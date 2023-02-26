import ReactStars from "react-stars/dist/react-stars";

import {PosterPreviewByGenreId} from "../PosterPreviewByGenreId/PosterPreviewByGenreId";

import "../MoviesListCard/MoviesListCard.css";
import './OneMovieByGenreId.css'
import {useNavigate} from "react-router-dom";


const OneMovieByGenreId = ({movieByGenreId}) => {

    const {id, original_language, original_title, poster_path, vote_average} = movieByGenreId;

    const navigate = useNavigate();


    const room = () => {
        localStorage.setItem('pickedMovieId', id);
        navigate('/info');
    };

    return (
        <div onClick={room} className={'card'} >

            <div className={"titleBlock"}>{original_title}</div>

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