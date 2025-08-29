
import {characters} from "../utils/characters.js";
import {useEffect, useState} from "react";
import {period_days_24} from "../utils/constants.js";


const AboutMe = ({heroId}) => {
    const [heroData, setHeroData] = useState(null);

    useEffect(() => {
        if (!heroId) return;

        const fetchHero = async () => {
            try {
                const storageKey = `hero-${heroId}`;
                const saved = localStorage.getItem(storageKey);

                if (saved) {
                    const parsed = JSON.parse(saved);
                    if (Date.now() - parsed.time < period_days_24) {
                        setHeroData(parsed.payload);
                        return;
                    }
                }


                const response = await fetch(characters[heroId].url);
                const data = await response.json();
                setHeroData(data);


                localStorage.setItem(storageKey, JSON.stringify({
                    payload: data,
                    time: Date.now()
                }));

            } catch (error) {
                console.error("Error fetching hero data:", error);
            }
        };

        fetchHero();
    }, [heroId]);


    if (!heroData) return <p>Loading...</p>;

    return (
        <div style={{textAlign: 'center'}}>
            <p>Name:{heroData.name}</p>
            <p>Birth Year:{heroData.birth_year}</p>
            <p>Homeworld:{heroData.homeworld}</p>
            <p>Gender:{heroData.gender}</p>
            <p>Height:{heroData.height} сm</p>
            <p>Weight:{heroData.mass} kg</p>
            <p>Hair:{heroData.hair_color}</p>
            <p>Eye:{heroData.eye_color}</p>
        </div>
    );
};

export default AboutMe;