import React, {useContext, useEffect, useState} from 'react';
import CustomLink from "../../../components/CustomLink/CustomLink";
import knight from '../../../assets/images/knight.gif'
import styles from './EditCharacter_page_1.module.css'
import MyInput from "../../../components/MyInput/MyInput";
import MyButton from "../../../components/MyButton/MyButton";
import {CharacterContext} from "../../../components/context/context";
import Character from "../../../character/Character";
import BaseParameters from "../../../components/BaseParameters/BaseParameters";
import MyImport from "../../../components/MyImport/MyImport";
import Name from "../../../components/Name/Name";
import MyExport from "../../../components/MyExport/MyExport";
import AdditionalParameters from "../../../components/AdditionalParameters/AdditionalParameters";

const EditCharacter_page_1 = () => {
    const {character, setCharacter} = useContext(CharacterContext);

    return (
        <div className={styles.container} style={{imageRendering: 'pixelated'}} >
            <CustomLink to='/'>Back</CustomLink>
            <div className={styles.textCol} style={{ width: '60%' }}>
                <Name/>
                <img
                    alt={'Name'}
                    src={knight}
                    width={100}
                />
                <BaseParameters/>
            </div>
            <div className={styles.textCol} style={{ width: '40%' }}>
                <MyImport/>
                <MyExport/>
                <AdditionalParameters/>
            </div>
            <CustomLink to='/edit2'>Next</CustomLink>
        </div>
    );
};

export default EditCharacter_page_1;