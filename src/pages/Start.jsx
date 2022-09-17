import React from 'react';
import {useContext} from "react";
import {CharacterContext} from "../components/context/context";
import CustomLink from "../components/CustomLink/CustomLink";

const Start = () => {
    // localStorage.setItem('character', JSON.stringify(character))
    return (
        <div>
            <CustomLink to='/'>Back</CustomLink>
        </div>
    );
};

export default Start;