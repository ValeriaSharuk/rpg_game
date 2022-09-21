import React from 'react';
import {useContext} from "react";
import {CharacterContext} from "../context/context";
import styles from "./AdditionalParameters.module.css"
import {get_AdditionalParamsKeys} from "../../utils/characterFunctions";

const AdditionalParameters = () => {

    const {character, setCharacter} = useContext(CharacterContext);

    const addParamsArr = get_AdditionalParamsKeys();

    return (
        <div className={styles.container}>
            <div>
                <span className={styles.itemIconHP}>
                    <i className="fa-solid fa-heart"></i>
                </span>
                {character.get_AdditionalParam('HP')}
            </div>
            <div>
                <span className={styles.itemIconDodge}>
                    <i className="fa-solid fa-person-walking-arrow-loop-left"></i>
                </span>
                {character.get_AdditionalParam('dodging')}
            </div>
            <div>
                <span className={styles.itemIconEnergy}>
                    <i className="fa-solid fa-bolt"></i>
                </span>
                {character.get_AdditionalParam('energy')}
            </div>
        </div>
    );
};

export default AdditionalParameters;