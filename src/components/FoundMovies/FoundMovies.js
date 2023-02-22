import {moviesService} from "../../services/moviesService";

const FoundMovies = ({movie}) => {

    const {original_title} = movie;

    return (
        <div style={{color:'snow'}}>
            {original_title}
        </div>
    );
};

export {FoundMovies};