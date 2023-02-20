const ChosenGenrePoster = ({poster_path,original_title}) => {

    const fullPoster = `https://image.tmdb.org/t/p/w500${poster_path}`


    return (
        <div>
            <img src={fullPoster} alt={original_title}/>
        </div>
    );
};

export {ChosenGenrePoster};