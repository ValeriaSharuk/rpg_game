import React, {Component} from 'react';
import Skill from "./Skill";
import {get_ParamNameBySkillName, get_SkillsKeys, isSkillLvlLowerParamLvl, get_BaseParamsKeys, get_AdditionalParamsKeys} from "../utils/characterFunctions"

class Character {
    constructor(props) {
        this.name = props.name;
        this.img = props.img;
        this.strength = {
            level: props.strength.level,
            attack: new Skill(props.strength.attack),
        }
        this.agility = {
            level: props.agility.level,
            stealth: new Skill(props.agility.stealth),
            archery: new Skill(props.agility.archery),
        }
        this.intelligence = {
            level: props.intelligence.level,
            learnability: new Skill(props.intelligence.learnability),
            survival: new Skill(props.intelligence.survival),
            medicine: new Skill(props.intelligence.medicine),
        }
        this.charisma = {
            level: props.charisma.level,
            intimidation: new Skill(props.charisma.intimidation),
            insight: new Skill(props.charisma.insight),
            appearance: new Skill(props.charisma.appearance),
            manipulation: new Skill(props.charisma.manipulation),
        }
        this.HP = this.strength.level + 3;
        this.dodging = this.agility.level + 10;
        this.energy = this.intelligence.level + this.charisma.level;
    }


    increaseParamLevel(param){
        //validation for parameter
        if( this[param].level === 5 ){
            this[param].level = this[param].level
        }
        else{
            this[param].level = this[param].level + 1;
        }
    }

    decreaseParamLevel(param) {
        //validation for parameter
        if(this[param].level !== 0){
            if ( isSkillLvlLowerParamLvl(param, this)) {
                this[param].level = this[param].level - 1;
            }
        }
        else {
            this[param].level = this[param].level;
        }
    }


    setName(props) {
        //validation for name
            if(props.length > 15 && props.length)
            {
                this.name = props.slice(0, 16);
            }
            else if(props.length === 0){
                this.name = this.name;
            }
            else{
                this.name = props;
            }
    }

    get_Name(param){
        return this.name;
    }

    get_BaseParam(param){
        return this[param].level;
    }

    get_AdditionalParam(param){
        return this[param];
        console.log(this[param])
    }

    get_HP(){
        return this.HP
    }

    get_Skills(){
        const baseParamKeys = get_BaseParamsKeys();
        let skillsArr = [];
        for(let keyParam of baseParamKeys){
            let baseParamValue= Object.keys(this[keyParam])
            for(let keyParamValue of baseParamValue)
            {
                if(keyParamValue !== 'level'){
                    skillsArr.push(this[keyParam][keyParamValue]);
                }
            }
        }
        return skillsArr;
    }

    set_Skill(skillName){
        const [keyParam, keyParamValue] = get_ParamNameBySkillName(skillName, this);
        console.log(this[keyParam])
        //if skill bar is full
        if(this[keyParam][keyParamValue].level_progress === 100){
            //if skill level isn't higher than parameter level
            if(this[keyParam][keyParamValue].level < this[keyParam].level){
                this[keyParam][keyParamValue].level_progress = 0;
                this[keyParam][keyParamValue].level += 1;
            }
        }
        else{
            this[keyParam][keyParamValue].level_progress += 10;
        }
    }

    reduce_HP() {
        console.log(this.HP)
        this.HP -= 1;
        console.log(this.HP)
    }

}
export default Character;