import React from 'react';
import styles from "./MyImport.module.css";
import knight from "../../assets/images/knight.gif";
import {useContext, useState} from "react";
import {CharacterContext} from "../context/context";

const MyImport = () => {
    const {character, setCharacter} = useContext(CharacterContext);

    const [file, setFile] = React.useState("");

    const onFileChange = (e) => {
        const reader = new FileReader ();
        console.log(e.target.files)
        reader.readAsText(e.target.files[0]);
        console.log(reader)
    };

    return (
        <div className={styles.inputWrapper}>
            <input onChange={onFileChange} type="file" name="file" id="inputFile" className={styles.inputFile} multiple/>
            <label  htmlFor='inputFile' className={styles.inputFileButton}>
                <span className={styles.inputFileIconWrapper}>
                    <i className="fa-solid fa-upload"></i>
                </span>
                <span className={styles.inputFileButtonText}>Import character</span>
            </label>
        </div>
    );
};

export default MyImport;