import React, {useContext, useEffect, useState} from 'react';
import CustomLink from "../../../components/CustomLink/CustomLink";
import knight from '../../../assets/images/knight.gif'
import styles from './styles.module.css'
import MyInput from "../../../components/MyInput/MyInput";
import MyButton from "../../../components/MyButton/MyButton";
import {CharacterContext} from "../../../components/context/context";
import Character from "../../../character/character";

const EditCharacter_page1 = () => {
    const {character, setCharacter} = useContext(CharacterContext);
    const [editParam, setEditParam] = useState({bool:false, param:''});
    const [inputParam, setInputParam] = useState(0);


    const clickToChangeParam = (param) => {
        setEditParam({bool:true, param:param});
        setInputParam(character.get(param))
        return false;
    }

    const changeParam = (e) => {
        setInputParam(e.target.value)
    }

    const submitParam = (param) => {
        character.set(param, inputParam.toString())
        setCharacter(new Character(character));
        localStorage.setItem('character',JSON.stringify(character))
        setEditParam(false)
    }
    const characterArrKeys = ['name','strength','agility','charisma']


    return (
        <div style={{imageRendering: 'pixelated'} } className={styles.container}>
            <CustomLink to='/'>Back</CustomLink>
            <img
                alt={'Name'}
                src={knight}
                width={130}
            />
            <div className={styles.baseParams}>
                <div className={styles.baseParamsColumn}>
                    {characterArrKeys.map(param =>
                        (editParam.bool && (param === editParam.param))
                            ?
                            <div className={styles.editForm}>
                                <MyInput onChange={changeParam} value={inputParam}/>
                                <MyButton onClick={() => submitParam(param)}>Save</MyButton>
                            </div>
                            :
                            <div className={styles.editForm}>
                                <span>{param}: {character.get(param)}</span>
                                <div onClick={() => clickToChangeParam(param)} className={styles.editParam}>
                                    <i className="fa-solid fa-paintbrush"></i>
                                </div>
                            </div>
                    )}
                </div>
            </div>
            <CustomLink to='/edit2'>Next</CustomLink>
        </div>
    );
};

export default EditCharacter_page1;