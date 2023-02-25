
const PosterPreviewByGenreId = ({poster_path}) => {

    const fullPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div>
            <img style={{height:350,width:250}} src={fullPoster} alt="moviePoster"/>
        </div>

    );
};

export {PosterPreviewByGenreId};