import {useSelector} from "react-redux";
import {ChosenGenreMovieCard} from "../ChosenGenreMovieCard/ChosenGenreMovieCard";

const ChosenGenre = () => {

    const {similarGenres} = useSelector(state => state.genres);



    return (
        <div>
            {similarGenres && similarGenres.map(movie=><ChosenGenreMovieCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {ChosenGenre};