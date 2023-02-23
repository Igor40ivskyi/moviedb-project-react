import {MoviesList} from "../../components";
import Header from "../../components/Header/Header";
import {Outlet} from "react-router-dom";

const MoviesPage = () => {
    return (
        <div style={{background:'snow'}}>
            <Header/>

            <Outlet/>
        </div>
    );
};

export {MoviesPage};