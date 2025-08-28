import React, {useEffect, useState} from 'react';
import {base_url, period} from "../utils/constants.js";

const AboutMe = () => {
    const [hero, setHero] = useState({});

    useEffect(() => {
        const heroStorage = JSON.parse(localStorage.getItem("luke"));
        if (heroStorage && (Date.now() - heroStorage.time) < period) {
            setHero(heroStorage.payload)
        } else {
            fetch(`${base_url}/v1/peoples/1`)
                .then(response => response.json())
                .then(data => {
                    setHero(data);
                    const info = {
                        payload: data,
                        time: Date.now()
                    };
                    localStorage.setItem("luke", JSON.stringify(info));
                })
        }

    }, [])


    return (
        <div style={{textAlign: 'center'}}>
            <p>Name:{hero.name}</p>
            <p>Birth Year:{hero.birth_year}</p>
            <p>Homeworld:{hero.homeworld}</p>
            <p>Gender:{hero.gender}</p>
            <p>Height:{hero.height} сm</p>
            <p>Weight:{hero.mass} kg</p>
            <p>Hair:{hero.hair_color}</p>
            <p>Eye:{hero.eye_color}</p>
        </div>
    );
};

export default AboutMe;