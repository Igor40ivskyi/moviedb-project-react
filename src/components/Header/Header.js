import React from 'react';

import css from './Header.module.css';
import {useSelector} from "react-redux";
import {Genres} from "../Genres/Genres";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/home'}>HOME</NavLink>

            <Genres/>
            <div>
                <div className={css.user}>

                </div>
            </div>
        </div>
    );
};

export default Header;