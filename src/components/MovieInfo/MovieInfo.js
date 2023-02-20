import {useSelector} from "react-redux";
import {useEffect} from "react";

const MovieInfo = () => {

    const {pickedMovie} = useSelector(state => state.movies);

    useEffect(() => {

    },[]);

    const {poster_path,original_title} = pickedMovie;


        const fullPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div>
            MovieInfo
            {poster_path && <img src={fullPoster} alt={original_title}/>}
        </div>
    );
};

export {MovieInfo};