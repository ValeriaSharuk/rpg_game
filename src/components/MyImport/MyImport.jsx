import React from 'react';
import styles from "./MyImport.module.css";
import {useContext, useState} from "react";
import {CharacterContext} from "../context/context";
import Character from "../../character/Character";

const MyImport = () => {
    const {character, setCharacter} = useContext(CharacterContext);


    window.addEventListener('load', function() {
        let upload = document.getElementById('inputFile');

        // Make sure the DOM element exists
        if (upload)
        {
            upload.addEventListener('change', function() {
                // Make sure a file was selected
                if (upload.files.length > 0)
                {
                    let reader = new FileReader(); // File reader to read the file

                    // This event listener will happen when the reader has read the file
                    reader.addEventListener('load', function() {
                        let result = JSON.parse(reader.result); // Parse the result into an object
                        setCharacter(new Character(result));
                        localStorage.setItem('character',JSON.stringify(new Character(result)));
                    });

                    reader.readAsText(upload.files[0]); // Read the uploaded file
                }
            });
        }
    });

    return (
        <div className={styles.inputWrapper}>
            <input type="file" name="file" id="inputFile" className={styles.inputFile} multiple/>
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