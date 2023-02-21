import css from './OneGenre.module.css'
import {useDispatch} from "react-redux";
import {genresActions} from "../../redux/slices/genresSlice";
const OneGenre = ({genre}) => {

    const {id, name} = genre;

    const dispatch = useDispatch();

    const getMoviesByGenreId = () => {
        console.log(id);
        dispatch(genresActions.getMoviesByGenreId(id))
    };

    return (
        <div>
            <div onClick={getMoviesByGenreId} className={css.nameOfGenre}>{name}</div>
        </div>
    );
};

export {OneGenre};