import React from 'react';

import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.linkPack}>
                <div style={{width:200}}>
                    <NavLink to={'/movies'}>HOME</NavLink>
                </div>
                <div style={{width:300}}>
                    <NavLink to={'/info'}>MOVIE DETAILS</NavLink>
                </div>
                <div style={{width:400}}>
                    <NavLink to={'moviesByGenre'}>GENRE RELATED</NavLink>
                </div>
            </div>

            <div>
                <div className={css.user}>
                    J
                </div>
            </div>
        </div>
    );
};

export default Header;