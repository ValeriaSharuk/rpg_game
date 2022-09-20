import './style/App.css';
import {BrowserRouter} from "react-router-dom";
import React, {useEffect, useState} from "react";
import AppRouter from "./components/AppRouter";
import {CharacterContext} from "./components/context/context";
import Character from "./character/Character";
import InitCharacter from "./data/InitCharacter";


function App() {

    const [character, setCharacter] = useState(new Character(InitCharacter))


    useEffect(() => {
        if(localStorage.getItem("character"))
            setCharacter(new Character(JSON.parse(localStorage.getItem('character'))))
    },[]);

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
