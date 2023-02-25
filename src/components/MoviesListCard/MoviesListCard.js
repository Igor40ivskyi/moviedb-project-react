import './MoviesListCard.css';
import {PosterPreview} from "../PosterPreview/PosterPreview";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";


import ReactStars from "react-stars/dist/react-stars";

const MoviesListCard = ({movie}) => {

    const {id, original_language, original_title,poster_path,vote_average} = movie;


    const navigate = useNavigate();

    const dispatch = useDispatch();




    const info = () => {
        localStorage.setItem('pickedMovieId',id)
        navigate('/info');
    };

    return (
        <div >

            <div onClick={info} className={"card"}>
                <div className={"titleBlock"}>{original_title}</div>

                <div>
                    <PosterPreview key={id} poster_path={poster_path}/>
                </div>
                <div>
                    <ReactStars count={10} size={27} value={vote_average}/>
                </div>

            </div>

        </div>
    );
};

export {MoviesListCard};