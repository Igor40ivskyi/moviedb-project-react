import '../MoviesListCard/MoviesListCard.css'

const PosterPreview = ({poster_path}) => {

    // const FirstHalfOfPoster = 'https://image.tmdb.org/t/p/w500';

    const fullPoster = `https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <div>
            <img className={"picture"} src={fullPoster} alt="moviePoster"/>
        </div>
    );
};

export {PosterPreview};