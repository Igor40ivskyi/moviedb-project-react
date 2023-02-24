import ReactStars from "react-stars/dist/react-stars";

import css from './StarsRating.css'

const StarsRating = () => {
    return (
        <div className={css.stars}>
            <ReactStars className={css.stars} count={10} size={34} value={2} color1={'red'} color2={'red'}/>
        </div>
    );
};

export {StarsRating};