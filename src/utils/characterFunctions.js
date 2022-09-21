export function get_ParamNameBySkillName(skillName, character){
    const baseParamKeys = get_BaseParamsKeys();
    for(let keyParam of baseParamKeys){
        let baseParamValue= Object.keys(character[keyParam])
        for(let keyParamValue of baseParamValue){
            if(keyParamValue !== 'level'){
                if(character[keyParam][keyParamValue].name === skillName){
                    return [keyParam, keyParamValue];
                }
            }
        }
    }
}

export function get_SkillsKeys(param){
    if(param === 'strength'){
        return['attack'];
    }
    if(param === 'agility'){
        return['stealth', 'archery'];
    }
    if(param === 'intelligence'){
        return['learnability', 'survival','medicine'];
    }
    if(param === 'charisma'){
        return['intimidation','insight','appearance', 'manipulation'];
    }
}

export function get_BaseParamsKeys(){
    return ['strength', 'agility', 'intelligence', 'charisma'];
}

export function get_AdditionalParamsKeys(){
    return ['HP', 'dodging', 'energy'];
}

export function isSkillLvlLowerParamLvl(param, character) {
    let skillsArr = get_SkillsKeys(param);
    let isSkillLvlLowerParamLvl = true;
    let baseParamValue = Object.keys(character[param])
    for (let keyParamValue of baseParamValue) {
        if (keyParamValue.toLowerCase() !== 'level') {
            let currentSkillName = skillsArr.find(item => item === keyParamValue);
            if (character[param].level <= character[param][currentSkillName].level) {
                isSkillLvlLowerParamLvl = false;
                return isSkillLvlLowerParamLvl;
            }
            else {
                return isSkillLvlLowerParamLvl;
            }
        }
    }
}

export function isHPZero(character){
    return (character.HP <= 1);
}