import css from './MoviesListCard.module.css'

const MoviesListCard = ({movie}) => {
    const {id, original_language, original_title} = movie;

    return (
        <div className={css.card}>
            <div>id {id}</div>
            <div>original_language {original_language}</div>
            <div>original_title {original_title}</div>
        </div>
    );
};

export {MoviesListCard};