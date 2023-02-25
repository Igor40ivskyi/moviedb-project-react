import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {genresActions} from "../../redux/slices/genresSlice";

import css from './OneGenre.module.css'

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
            <div onClick={getMoviesByGenreId} className={css.nameOfGenre}>{name}</div>
        </div>
    );
};

export {OneGenre};