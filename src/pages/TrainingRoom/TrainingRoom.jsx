import React from 'react';
import {useContext} from "react";
import {CharacterContext} from "../../components/context/context";
import CustomLink from "../../components/CustomLink/CustomLink";
import styles from "./TrainingRoom.module.css";
import Character from "../../character/Character";
import Skills from "../../components/Skills/Skills";

const TrainingRoom = () => {

    const {character, setCharacter} = useContext(CharacterContext);

    return (
        <div className={styles.container}>
            <CustomLink to='/start'>Back</CustomLink>
            <Skills changeSkill/>
        </div>
    );
};

export default TrainingRoom;