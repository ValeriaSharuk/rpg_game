const InitCharacter = {
    name: 'Player',
        img: '../assets/images/hobbit.png',
    strength: {
    level: 0,
        attack:{
        name: 'attack',
            level: 0,
            level_progress: 100,
    }
},
    agility: {
        level: 0,
            stealth:{
            name: 'stealth',
                level: 0,
                level_progress: 0,
        },
        archery:{
            name: 'archery',
                level: 0,
                level_progress: 0,
        }
    },
    intelligence: {
        level: 0,
            learnability:{
            name: 'learnability',
                level: 0,
                level_progress: 0,
        },
        survival:{
            name: 'survival',
                level: 0,
                level_progress: 0,
        },
        medicine:{
            name: 'medicine',
                level: 0,
                level_progress: 0,
        }
    },
    charisma: {
        level: 0,
            intimidation:{
            name: 'intimidation',
                level: 0,
                level_progress: 0,
        },
        insight:{
            name: 'insight',
                level: 0,
                level_progress: 0,
        },
        appearance:{
            name: 'appearance',
                level: 0,
                level_progress: 0,
        },
        manipulation:{
            name: 'manipulation',
                level: 0,
                level_progress: 0,
        },
    },
}
export default InitCharacter