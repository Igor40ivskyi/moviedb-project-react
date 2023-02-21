const PosterPreviewByGenreId = ({poster_path}) => {

    const fullPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div>
            <img src={fullPoster} alt="moviePoster"/>
        </div>

    );
};

export {PosterPreviewByGenreId};