import React from 'react';
import styles from "./EditCharacter_page_2.module.css";
import CustomLink from "../../../components/CustomLink/CustomLink";
import {useEffect, useState, useContext} from "react";
import {CharacterContext} from "../../../components/context/context";
import Skills from "../../../components/Skills/Skills";

const EditCharacterPage2 = () => {

    const {character, setCharacter} = useContext(CharacterContext);

    const skillsArr = character.get_Skills();

    return (
        <div className={styles.container}>
            <CustomLink to='/edit1'>Back</CustomLink>
            <Skills />
        </div>
    );
};

export default EditCharacterPage2;