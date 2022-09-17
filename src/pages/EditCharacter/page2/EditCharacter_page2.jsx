import React from 'react';
import styles from "../page1/styles.module.css";
import CustomLink from "../../../components/CustomLink/CustomLink";
import {useEffect, useState, useContext} from "react";
import {CharacterContext} from "../../../components/context/context";

const EditCharacterPage2 = () => {

    const {character, setCharacter} = useContext(CharacterContext);

    //const characterArrKeys = character.toArr('2');
    console.log(Object.entries(character))
    return (
        <div>
            <CustomLink to='/edit1'>Back</CustomLink>
            {Object.entries(character).map(param =>
                <div className={styles.editForm}>
                    <span>{param}: {character.get(param)}</span>
                </div>
                )}
        </div>
    );
};

export default EditCharacterPage2;