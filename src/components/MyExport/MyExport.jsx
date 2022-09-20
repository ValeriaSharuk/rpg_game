import React from 'react';
import styles from './MyExport.module.css'
import {useContext} from "react";
import {CharacterContext} from "../context/context";

const MyExport = () => {

    const {character, setCharacter} = useContext(CharacterContext);

    const blob = new Blob([JSON.stringify(character, null, 2)], {type : 'application/json'});

    const saveFile = async (blob) => {
        const a = document.createElement('a');
        a.download = `${character.name}.json`;
        a.href = URL.createObjectURL(blob);
        a.addEventListener('click', (e) => {
            setTimeout(() => URL.revokeObjectURL(a.href), 30 * 1000);
        });
        a.click();
    };

    return (
        <div className={styles.export} onClick={() => saveFile(blob)}>
            <div className={styles.exportImage}>
                <i className="fa-solid fa-download"></i>
            </div>
            <div className={styles.exportText}>
                Export character
            </div>

        </div>
    );
};

export default MyExport;