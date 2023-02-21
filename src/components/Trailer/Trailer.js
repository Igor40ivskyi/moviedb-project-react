import YouTube from "react-youtube";


const Trailer = ({videosByMovieId}) => {

    const results = videosByMovieId.results;

    const video = results[0];

    console.log(video);
    return (
        <div>
            <YouTube  videoId={video.key}/>
        </div>
    );
};

export {Trailer};