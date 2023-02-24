import {Outlet} from "react-router-dom";

import {MoviesList} from "../../components";
import Header from "../../components/Header/Header";
import css from './MoviesPage.css'
import {useContext} from "react";
import {ThemeContext} from "../../App";

import './MoviesPage.css'

const MoviesPage = () => {

    const {theme} = useContext(ThemeContext);
    console.log(theme);

    return (
        <div id={theme}>
            <Header/>

            <Outlet/>
        </div>
    );
};

export {MoviesPage};