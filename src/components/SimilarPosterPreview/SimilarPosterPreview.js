const SimilarPosterPreview = ({poster_path,original_title}) => {

    const fullPoster = `https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <div>
            <img style={{width:300}} src={fullPoster} alt={original_title}/>
        </div>
    );
};

export {SimilarPosterPreview};