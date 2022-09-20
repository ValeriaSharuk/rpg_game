import React from 'react';
import styles from "./Name.module.css";
import MyInput from "../MyInput/MyInput";
import MyButton from "../MyButton/MyButton";
import {useContext, useState} from "react";
import {CharacterContext} from "../context/context";
import Character from "../../character/Character";

const Name = () => {
    const {character, setCharacter} = useContext(CharacterContext);

    const [isChangeName, setIsChangeName] = useState(false);
    const [inputName, setInputName] = useState('');

    const clickToChangeName = () => {
        setIsChangeName(true);
        setInputName(character.get_Name())
        return false;
    }

    const changeName = (e) => {
        setInputName(e.target.value)
    }

    const submitName = () => {
        character.setName(inputName)
        setCharacter(new Character(character));
        localStorage.setItem('character',JSON.stringify(character))
        setIsChangeName(false)
    }
    return (
        <div>
            {isChangeName ?
                <div className={styles.editForm}>
                    <MyInput onChange={changeName} value={inputName}/>
                    <MyButton onClick={() => submitName()}>Save</MyButton>
                </div>
                :
                <div className={styles.editForm}>
                    <span>Name: {character.get_Name()}</span>
                    <div onClick={() => clickToChangeName()} className={styles.editParam}>
                        <i className="fa-solid fa-paintbrush"></i>
                    </div>
                </div>
            }
        </div>
    );
};

export default Name;