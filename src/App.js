import './style/App.css';
import {BrowserRouter} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Menu from "./pages/Menu";
import AppRouter from "./components/AppRouter";
import {CharacterContext} from "./components/context/context";
import Character from "./character/character";

function App() {

    const [character, setCharacter] = useState(new Character({
        name: 'Player',
        img: '../assets/images/hobbit.png',
        strength: 0,
        agility: 0,
        intelligence: 0,
        charisma: 0,
        HP: 3,
        avoidance: 10,
        energy: 0
    }))
    useEffect(() => {
        if(localStorage.getItem("character"))
            setCharacter(new Character(JSON.parse(localStorage.getItem('character'))))
    },[]);
    console.log(JSON.parse(localStorage.getItem("character")))
    return (
        <div className='container'>
            <CharacterContext.Provider value={{character, setCharacter}}>
                <BrowserRouter>
                    <AppRouter/>
                </BrowserRouter>
            </CharacterContext.Provider>
        </div>
    );
}

export default App;
