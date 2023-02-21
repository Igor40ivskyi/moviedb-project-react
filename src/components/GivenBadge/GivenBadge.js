import css from './GivenBadge.module.css'

const GivenBadge = ({genre}) => {

    const {id, name} = genre;
    return (
        <div className={css.badge}>
            {name}
        </div>
    );
};

export {GivenBadge};