import {MoviesList} from "../../components";
import Header from "../../components/Header/Header";
import {Outlet} from "react-router-dom";
import {Genres} from "../../components/Genres/Genres";

const MoviesPage = () => {
    return (
        <div style={{background:'black'}}>
            <Header/>

            <Outlet/>
        </div>
    );
};

export {MoviesPage};