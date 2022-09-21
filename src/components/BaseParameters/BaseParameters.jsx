import React,{useContext} from 'react';
import styles from "./BaseParameters.module.css";
import {CharacterContext} from "../context/context";
import Character from "../../character/Character";
import {get_BaseParamsKeys} from "../../utils/characterFunctions";

const BaseParameters = () => {
    const {character, setCharacter} = useContext(CharacterContext);

    const clickToAddParam = (param) => {
        character.increaseParamLevel(param);
        setCharacter(new Character(character));
        localStorage.setItem('character',JSON.stringify(character));
        return false;
    }

    const clickToSubtractParam = (param) => {
        character.decreaseParamLevel(param);
        setCharacter(new Character(character));
        localStorage.setItem('character',JSON.stringify(character));
        return false;
    }
    return (
        <div className={styles.container}>
                <p>Base parameters:</p>
                {get_BaseParamsKeys().map(param =>
                    <div key={param} className={styles.editForm}>
                        <span>{param}: </span>
                        <div onClick={() => clickToSubtractParam(param)} className={styles.editParam}>
                            <i className="fa-solid fa-minus"></i>
                        </div>
                        <span>{character.get_BaseParam(param)}</span>
                        <div onClick={() => clickToAddParam(param)} className={styles.editParam}>
                            <i className="fa-solid fa-plus"></i>
                        </div>
                    </div>
                )}
        </div>
    );
};

export default BaseParameters;