import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {genresActions} from "../../redux/slices/genresSlice";

import './OneGenre.css';

const OneGenre = ({genre}) => {

    const {id, name} = genre;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const getMoviesByGenreId = () => {
        dispatch(genresActions.getMoviesByGenreId({id}))
        navigate(`/moviesByGenre?genreId=${id}`);
    };

    return (
        <div>
            <div onClick={getMoviesByGenreId} className={"nameOfGenre"}>{name}</div>
        </div>
    );
};

export {OneGenre};