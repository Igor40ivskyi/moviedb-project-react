import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";

import ReactSwitch from "react-switch";
import './Header.css';
import {ThemeContext} from "../../App";

const Header = () => {

    const {theme,toggleTheme} = useContext(ThemeContext);

    return (
        <div className={"Header"}>
            <div className={"linkPack"}>
                <div style={{width:200}}>
                    <NavLink to={'/movies'}>HOME</NavLink>
                </div>
                <div style={{width:300}}>
                    <NavLink to={'/info'}>MOVIE ROOM</NavLink>
                </div>
                <div style={{width:400}}>
                    <NavLink to={'moviesByGenre'}>GENRE RELATED</NavLink>
                </div>
            </div>

            <div style={{width:190}} className={'switch'}>
                <ReactSwitch onChange={toggleTheme} checked={theme === 'light'}/>
                <label>{theme === 'light'?'Light Mode':'Dark Mode'}</label>
            </div>
            <div>
                <div className={"user"}>
                    R
                </div>
            </div>
        </div>
    );
};

export default Header;