import React, {useEffect, useState} from 'react';
import {base_url} from "../utils/constants.jsx";

const FarGalaxy = () => {
    const [text, setText] = useState("Loading...")

    useEffect(() => {
        const episode = Math.floor(Math.random() * 6 +1)
        fetch(`${base_url }/v1/films/${episode}`)
            .then(response =>response.json())
            .then(data =>setText(data.opening_crawl))



        return ()=>{
            console.log("Unmounted");
        }
    }, []);

    return (
        <p className="farGalaxy">
            {text}
        </p>
    );
};

export default FarGalaxy;