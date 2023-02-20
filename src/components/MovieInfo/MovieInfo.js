import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {moviesActions} from "../../redux/slices/moviesSlice";
import {MovieInfoFullData} from "../MovieInfoFullData/MovieInfoFullData";

const MovieInfo = () => {
    const id = localStorage.getItem('pickedMovieId');


    const {movieById} = useSelector(state => state.movies);

    console.log(movieById);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getMovieById({id}))
    },[]);
    return (
        <div>
            MovieInfo
            {movieById && <MovieInfoFullData key={movieById.id} movieById={movieById}/>}
        </div>
    );
};

export {MovieInfo};