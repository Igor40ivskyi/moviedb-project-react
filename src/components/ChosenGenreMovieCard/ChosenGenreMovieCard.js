import {ChosenGenrePoster} from "../ChosenGenrePoster/ChosenGenrePoster";

const ChosenGenreMovieCard = ({movie}) => {
    const {id,original_title, poster_path} = movie;

    return (
        <div>
            <div>
                {original_title}
            </div>
            <div>
                <ChosenGenrePoster key={id} poster_path={poster_path} original_title={original_title}/>
            </div>
        </div>
    );
};

export {ChosenGenreMovieCard};