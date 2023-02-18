import css from './Genres.module.css'
import {useSelector} from "react-redux";

const Genres = () => {
    const {genres} = useSelector(state => state.genres);
    const genresList = genres.genres;
    console.log(genresList);
    return (
        <div className={css.genresBlock}>
            <div style={{width:660,textAlign:'center'}}>GENRES</div>
            {genresList && genresList.map(genre => {
                const {name} = genre;
                return(
                    <div className={css.genreBlock} key={genre.id}>
                        {name}
                    </div>
                )
            })}
        </div>
    );
};

export {Genres};