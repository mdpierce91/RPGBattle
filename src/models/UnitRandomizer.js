import Unit from './Unit';
import { v4 as uuidGenerator } from 'uuid';

export const getRandomUnits = (count) => {
    // Initialize empty array
    let units = [];
    let randomizeId = uuidGenerator();
    // For each requested count, randomize a unit and add it to units
    for(let i=0;i<count;i++){
        units.push(unitRandomizer(randomizeId, i));
    }
    // Return the finished list.
    return units;
}


const unitRandomizer = (randomizeId, count) => {
    // Randomize properties
    let props = {
        downed: false,
        id: `${randomizeId}-${count}`,
        magicAttack: randomizeStat(),
        magicDefence: randomizeStat(),
        maxHitPoints: randomizeStat(),
        name: `the ${count}`,
        physicalAttack: randomizeStat(),
        physicalDefence: randomizeStat(),
        speciesId: count,
        speciesName: `the ${count}`,
        speed: randomizeStat(),
        status: [],
        types: randomType()
    }
    props.currentHitpoints = props.maxHitPoints;

    // Create new Unit
    let unit = new Unit(props);
    // Return finished Unit
    return unit;
}

const randomType = () => {
    // Roll two types, numbered between 1-12
    let types = [
        rollDice(12),
        rollDice(12)
    ];
    // Return the types, if they are the same, just return one
    return types[0] === types[1] ? [types[0]] : types;
}

const randomizeStat = () => {
    // Generate 4 numbers
    let values = [
        rollDice(6),
        rollDice(6),
        rollDice(6),
        rollDice(6)
    ]
    // Drop lowest value
    var minVal = Math.min(...values);
    let finalValues = values.filter(e => e !== minVal);

    // Add remaining values to create the final total
    return finalValues.reduce((total, value) => {
        return total + value;
    }, 0);
}

const rollDice = (max) => {
    return Math.ceil(Math.random()*max);
}