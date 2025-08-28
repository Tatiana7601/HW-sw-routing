import React, {useEffect} from 'react';
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
import FarGalaxy from "./FarGalaxy.jsx";
import {useParams} from "react-router";

const Home = ({hero, setHero}) => {
    const {heroId} = useParams();

    useEffect(() => {
        if (heroId) {
            setHero(heroId);
        } else {
            setHero("luke");
        }
    }, [heroId]);

    return (
        <main className="clearfix">
            <Hero heroId={hero}/>
            <DreamTeam hero={hero}/>
            <FarGalaxy/>
        </main>
    );
};

export default Home;