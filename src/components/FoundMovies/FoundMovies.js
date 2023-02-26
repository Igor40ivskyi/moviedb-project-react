
import './FoundMovies.css';
import {useNavigate} from "react-router-dom";

const FoundMovies = ({movie}) => {

    console.log(movie,'FOUND MOVIE');

    const {id,original_title,poster_path,backdrop_path} = movie;

    const fullPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;

    const navigate = useNavigate();

    const room = () => {
        localStorage.setItem('pickedMovieId',id)
        navigate('/info');
    };

    return (

        <div onClick={room}>

            {poster_path && <div className={"FoundMoviesCard"}>

                <div className={"FoundMoviesTitleBlock"}>
                    {original_title}
                </div>

                <div>
                    <img style={{width: 200, maxHeight: 250, borderRadius: 5}} src={fullPoster} alt={original_title}/>
                </div>

            </div>}
        </div>
    );
};

export {FoundMovies};