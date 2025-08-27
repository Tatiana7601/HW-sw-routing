import React, {useEffect, useState} from 'react';
import {base_url, period_days_24} from "../utils/constants.jsx";

const Contact = () => {
    const [planets, setPlanets] = useState(['wait...'])
    const fillPlanets = async function (url) {
        const response = await fetch(url);
        const data = await response.json();
        const planetsResponse = data.map(obj => obj.name);
        setPlanets(planetsResponse);
        const info = {
            payload: planetsResponse,
            time: Date.now()
        }

        localStorage.setItem('planets', JSON.stringify(info));
    }

    useEffect(() => {
        const planetInfo = JSON.parse(localStorage.getItem("planets"));
        if (planetInfo &&(Date.now() - planetInfo.time) < period_days_24) {
            setPlanets(planetInfo.payload);
        } else {
            fillPlanets(`${base_url}/v1/planets`)
        }

    }, []);

    return (
        <div>
            <form className={"w-50 m-auto"}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username"
                           aria-describedby="basic-addon1"/>
                </div>

                <select className="form-select mb-3" aria-label="Default select example">
                    <option disabled>Open this select menu</option>
                    {
                        planets.map(planet =>
                            <option key={planet} value={planet}>{planet}</option>
                        )
                    }
                </select>

                <div className="input-group mb-3">
                    <textarea className="form-control" aria-label="With textarea"></textarea>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>


    );
};

export default Contact;