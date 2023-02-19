const PosterPreview = ({poster_path}) => {

    // const FirstHalfOfPoster = 'https://image.tmdb.org/t/p/w500';

    const fullPoster = `https://image.tmdb.org/t/p/w500${poster_path}`

    return (
        <div>
            <img style={{maxWidth:'100%',maxHeight:'100%'}} src={fullPoster} alt="moviePoster"/>
        </div>
    );
};

export {PosterPreview};