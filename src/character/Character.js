import React, {Component} from 'react';
import Skill from "./Skill";

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

    decreaseParamLevel(param){
        //validation for parameter
        if( this[param].level === 0 ){
            this[param].level = this[param].level
        }
        else{
            this[param].level = this[param].level - 1;
        }
    }

    setName(props) {
        //validation for name
            if(props.length > 15)
            {
                this.name = props.slice(0, 16);
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
    }
    get_BaseParamsKeys(){
        return ['strength', 'agility', 'intelligence', 'charisma'];
    }

    get_AdditionalParamsKeys(){
        return ['HP', 'dodging', 'energy'];
    }

    get_Skills(){
        const baseParamKeys = this.get_BaseParamsKeys();
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
}
export default Character;