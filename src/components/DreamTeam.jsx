import React from 'react';
import {characters} from "../utils/characters.js";
import {useNavigate} from "react-router";
import {navItems} from "../utils/constants.js";

const DreamTeam = ({hero}) => {
    const navigate = useNavigate();

    return (
        <section className="float-end w-50 row border mx-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {
                Object.keys(characters).filter(f => f !== hero)
                    .map((friend, i) => (
                        <img key={i + 1} className="col-4"
                             onClick={() => navigate(`/${navItems[0].route}/${friend}`)}
                             src={characters[friend].img} alt={`friend${i + 1}`}/>
                    ))}
        </section>
    );
};

export default DreamTeam;