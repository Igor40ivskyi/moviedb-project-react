import css from './Genres.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genresActions} from "../../redux/slices/genresSlice";
import {Genre} from "../Genre/Genre";

const Genres = () => {

    const {genres} = useSelector(state => state.genres);

    const genresList = genres.genres;

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(genresActions.getAllGenres());
    }, []);


    return (
        <div className={css.genresBlock}>
            {genresList && genresList.map(genre=><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

    export {Genres};