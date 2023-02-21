import css from './GenreBadge.module.css'
import {GivenBadge} from "../GivenBadge/GivenBadge";

const GenreBadge = ({genres}) => {

    return (
        <div className={css.badgesBlock}>
            {genres && genres.map(genre=><GivenBadge key={genre.id} genre={genre}/>)}
        </div>
    );
};

export {GenreBadge};