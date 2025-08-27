import React from 'react';
import Home from "./Home.jsx";
import AboutMe from "./AboutMe.jsx";
import StarWars from "./StarWars.jsx";
import {Route, Routes} from "react-router";
import {navItems} from "../utils/constants.jsx";
import Contact from "./Contact.jsx";


const MainBlock = () => {

    return (
        <Routes>
            {['/',`${navItems[0].route}`].map(p =>
                <Route key={p} path={p} element={<Home/>}></Route>
            )
            }

            <Route path={`${navItems[1].route}`} element={<AboutMe/>}></Route>
            <Route path={`${navItems[2].route}`} element={<StarWars/>}></Route>
            <Route path={`${navItems[3].route}`} element={<Contact/>}></Route>
            <Route path={'*'} element={<h1>ERROR!</h1>}></Route>
        </Routes>
    )

};

export default MainBlock;