import css from '../Genres/Genres.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genresActions} from "../../redux/slices/genresSlice";
import {useNavigate} from "react-router-dom";

const Genre = ({genre}) => {

    const {id, name} = genre;

    const dispatch = useDispatch();

    const {similarGenres} = useSelector(state => state.genres);

    useEffect(() => {


    },[]);

    const navigate = useNavigate();


    const getSimilarGenres = (id) => {
        dispatch(genresActions.getSimilarGenres({id}));
        navigate('/chosenGenre')
    };

    return (
        <div onClick={getSimilarGenres} className={css.genreBlock}>

            {name}
        </div>
    );
};


export {Genre};