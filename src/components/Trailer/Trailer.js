import YouTube from "react-youtube";


const Trailer = ({videosByMovieId}) => {

    const results = videosByMovieId.results;

    console.log(results);
    const video = results[0];

    console.log(video);
    return (
        <div>
            {/*{video.key && <YouTube  videoId={video.key}/>}*/}
        </div>
    );
};

export {Trailer};