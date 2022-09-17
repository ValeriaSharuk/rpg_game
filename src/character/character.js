import React, {Component} from 'react';

class Character {
    constructor({...props}) {
        this.name = props.name;
        this.img = props.img;
        this.strength = props.strength;
        this.agility = props.agility;
        this.intelligence = props.intelligence;
        this.charisma = props.charisma;
        this.HP = props.HP;
        this.avoidance = props.avoidance;
        this.energy = props.energy;
    }
    set(param, props) {
        //validation for name
        if(param === 'name') {
            if(props.length > 15)
            {
                this[param] = props.slice(0, 16);
            }
            else{
                this[param] = props;
            }
        }
        //validation for parametrs
        else{
            if( !isNaN(parseInt(props)) ){
                if(parseInt(props)>=6){
                    this[param] = 5;
                }
                else{
                    this[param] = props;
                }
            }
            else{
                this[param] = this[param]
            }
        }
    }

    get(param){
        return this[param];
    }


    toArr(typeOfSkill){
        const arrKeys= [];
        const typeOfSkillNum = +typeOfSkill;
        for (let [key, value] of Object.entries(this)){
            switch (typeOfSkillNum) {
                case 1:
                    if (key === 'name' ||
                        key === 'strength' ||
                        key === 'agility' ||
                        key === 'intelligence' ||
                        key === 'charisma') {
                        arrKeys.push(key)
                    };
                    break;
                case 2:
                    if (key === 'HP' ||
                        key === 'avoidance' ||
                        key === 'energy') {
                        arrKeys.push(key)
                    };
                    break;
            }
        }
        return arrKeys;
    }

    // strength: {
    //     level: 0,
    //     skill: this.skills.attack.skillLevel
    // },


    //
    // skills:{
    //     attack: {
    //         skillLevel: 0,
    //         skillBar: 0,
    //     },
    //     stealth: {
    //         skillLevel: 0,
    //         skillBar: 0,
    //     },
    //     archery: {
    //         skillLevel: 0,
    //         skillBar: 0,
    //     },
    //     learnability: {
    //         skillLevel: 0,
    //         skillBar: 0,
    //     },
    //     survival: {
    //         skillLevel: 0,
    //         skillBar: 0,
    //     },
    //     medicine: {
    //         skillLevel: 0,
    //         skillBar: 0,
    //     },
    //     intimidation: {
    //         skillLevel: 0,
    //         skillBar: 0,
    //     },
    //     insight: {
    //         skillLevel: 0,
    //         skillBar: 0,
    //     },
    //     appearance: {
    //         skillLevel: 0,
    //         skillBar: 0,
    //     },
    //     manipulation: {
    //         skillLevel: 0,
    //         skillBar: 0,
    //     }
    // }
}
export default Character;