import {MoviesList} from "../../components";
import Header from "../../components/Header/Header";

const MoviesPage = () => {
    return (
        <div style={{background:'black'}}>
            <Header/>
            <MoviesList/>
        </div>
    );
};

export {MoviesPage};