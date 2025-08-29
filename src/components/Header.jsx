import React from 'react';
import Navigation from "./Navigation.jsx";
import {characters} from "../utils/characters.js";

const Header = ({hero}) => {
    return (
        <header>
            <Navigation/>
            <h1>
                {characters[hero].name}
            </h1>
        </header>
    );
};

export default Header;