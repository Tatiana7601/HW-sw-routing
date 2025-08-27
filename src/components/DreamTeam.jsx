import React from 'react';
import {friends} from "../utils/constants.jsx";

const DreamTeam = () => {
    return (
        <section className="float-end w-50 row border mx-1">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.map((img, i) => (
                <img key={i + 1} className="col-4" src={img} alt={`friend${i + 1}`}/>
            ))}
        </section>
    );
};

export default DreamTeam;