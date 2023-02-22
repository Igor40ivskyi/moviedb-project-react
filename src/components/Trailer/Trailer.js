import YouTube from "react-youtube";


const Trailer = ({videosByMovieId}) => {

    const results = videosByMovieId.results;

    console.log(results);
    const video = results[0];

    console.log(video);
    return (
        <div>
            {video? <YouTube  videoId={video.key}/>:<div style={{color:'snow'}}>
                "Sorry there is no trailer for this movie"
            </div>}
        </div>
    );
};

export {Trailer};