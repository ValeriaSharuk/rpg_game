import React, {useState} from 'react';
import MyButton from "../../components/MyButton/MyButton";
import styles from "./Battle.module.css"
import CustomLink from "../../components/CustomLink/CustomLink";
import {useContext} from "react";
import {CharacterContext} from "../../components/context/context";
import {isHPZero} from "../../utils/characterFunctions";
import Character from "../../character/Character";
import InitCharacter from "../../data/InitCharacter";

const Battle = () => {

    const {character, setCharacter} = useContext(CharacterContext);
    const [isGameEnd, setIsGameEnd] = useState(false);
    const [HP, setHP] = useState(character.get_HP());

    const onClickGetAttacked = () => {
        if(isHPZero(character)){
            setIsGameEnd(true)
        }
        else{
            character.reduce_HP();
            setCharacter(character);
            localStorage.setItem('character',JSON.stringify(character));
            setHP(character.HP)
        }
    }
    const onClickRestart = () => {
        setCharacter(new Character(InitCharacter));
        localStorage.setItem('character',JSON.stringify(character));
        setIsGameEnd(false)
        setHP(character.HP)
    }

    return (
        <div>
            {isGameEnd ?
                <div>
                    <h1>Game over!</h1>
                    <MyButton onClick={onClickRestart}>Restart Game</MyButton>
                </div>
                :
                <div className={styles.container}>
                    <CustomLink to='/start'>Back</CustomLink>
                    <div className={styles.buttonAndIcon}>
                        <MyButton onClick={onClickGetAttacked}>Get attacked</MyButton>
                        <div>
                        <span className={styles.itemIconHP}>
                            <i className="fa-solid fa-heart"></i>
                        </span>
                            {HP}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Battle;