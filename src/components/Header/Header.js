import React from 'react';

import css from './Header.module.css';
import {useSelector} from "react-redux";
import {Genres} from "../Genres/Genres";

const Header = () => {
    return (
        <div className={css.Header}>
            <Genres/>
        </div>
    );
};

export default Header;