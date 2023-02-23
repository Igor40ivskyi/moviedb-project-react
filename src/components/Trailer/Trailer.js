import YouTube from "react-youtube";
import css from './Trailer.module.css'

const Trailer = ({videosByMovieId}) => {

    const results = videosByMovieId.results;

    console.log(results);
    const video = results[0];

    console.log(video);
    return (
        <div style={{width: 1300, background: 'silver'}}>
            {
                video

                    ?
                    <YouTube containerClassName={css.videoTrailer} videoId={video.key} opts={{width:"100%",height:700}}/>

                    :
                    <div style={{color: 'snow'}}>
                        "Sorry there is no trailer for this movie"
                    </div>}
        </div>
    );
};

export {Trailer};