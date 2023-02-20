const MovieInfoFullData = ({movieById}) => {
    const {poster_path, original_title} = movieById;

    const fullPoster = `https://image.tmdb.org/t/p/w500${poster_path}`;

    return (
        <div>
            <img src={fullPoster} alt={original_title}/>
        </div>
    );
};

export {MovieInfoFullData};