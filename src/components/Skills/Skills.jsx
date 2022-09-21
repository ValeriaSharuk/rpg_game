import React from 'react';
import styles from "./Skills.module.css";
import Character from "../../character/Character";
import {useContext} from "react";
import {CharacterContext} from "../context/context";

const Skills = ({...props}) => {

    console.log(props)
    const {character, setCharacter} = useContext(CharacterContext);

    const skillsArr = character.get_Skills();

    const onClickAddSkill = (keyValue) => {
        character.set_Skill(keyValue.name)
        setCharacter(new Character(character));
        localStorage.setItem('character',JSON.stringify(character));
    }
    return (
        <div>
            <p>Skills:</p>
            {skillsArr.map(keyValue =>
                <div key={keyValue.name} className={styles.main}>
                    {keyValue.name} |
                    L:{keyValue.level}
                    <div className={styles.maxAndPlus}>
                        <div className={styles.max}>
                            <div
                                className={styles.value}
                                style={{width: `${keyValue.level_progress}%`}}
                            >
                            </div>
                            <div className={styles.progress}>
                                {keyValue.level_progress}/100
                            </div>
                        </div>
                        {
                            props.changeSkill ?
                                <div onClick={() => {onClickAddSkill(keyValue)}} className={styles.plus}>
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                :
                                <span></span>
                        }
                    </div>
                </div>
            )}
        </div>
    );
};

export default Skills;
