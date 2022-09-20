import React from 'react';
import styles from "./EditCharacter_page_2.module.css";
import CustomLink from "../../../components/CustomLink/CustomLink";
import {useEffect, useState, useContext} from "react";
import {CharacterContext} from "../../../components/context/context";

const EditCharacterPage2 = () => {

    const {character, setCharacter} = useContext(CharacterContext);

    const skillsArr = character.get_Skills();

    return (
        <div className={styles.container}>
            <CustomLink to='/edit1'>Back</CustomLink>
            <p>Skills:</p>
            {skillsArr.map(keyValue =>
                <div key={keyValue.name} className={styles.main}>
                    {keyValue.name} |
                    L:{keyValue.level}
                    <div className={styles.max}>
                        <div
                            className={styles.value}
                            style={{ width: `${keyValue.level_progress}%` }}
                        >
                        </div>
                        <div className={styles.progress}>
                                {keyValue.level_progress}/100
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditCharacterPage2;