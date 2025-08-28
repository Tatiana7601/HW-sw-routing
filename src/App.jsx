import './App.css'
import Header from "./components/Header.jsx";
import MainBlock from "./components/MainBlock.jsx";
import Footer from "./components/Footer.jsx";
import {useState} from "react";

function App() {
    const [hero, setHero] = useState("luke");

    return (
        <>
            <Header hero={hero}/>
            <MainBlock hero={hero} setHero={setHero}/>
            <Footer/>
        </>
    )
}

export default App
