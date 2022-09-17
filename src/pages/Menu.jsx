import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import CustomLink from "../components/CustomLink/CustomLink";


const Menu = () => {
    return (
        <div>
            <CustomLink   to="/start">Start</CustomLink>
            <CustomLink   to="/edit1">Edit</CustomLink>
            <div style={{justifyContent:"center"}}>
                <h1>
                    Greetings Traveler
                </h1>

                <p>
                    Please explore one of our dungeons
                </p>
            </div>
        </div>

    );
};

export default Menu;