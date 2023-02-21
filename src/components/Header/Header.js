import React from 'react';

import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'/movies'}>HOME</NavLink>
            <div>
                <div className={css.user}>

                </div>
            </div>
        </div>
    );
};

export default Header;