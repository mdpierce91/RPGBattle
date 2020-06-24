import database from '../firebase/firebase';
import { getRandomUnits } from '../models/UnitRandomizer';

export const createRandomUnit = () => {
    console.log('create a new unit!');
    let unit = getRandomUnits(1)[0];
    console.log('new unit:', unit);
    return addUnit(unit)
}

export const createRandomUnits = () => {
    console.log('create a new units!');
    let units = getRandomUnits(25);
    console.log('new units:', units);
    return addUnits(units);
}

export const addUnit = (unit) => {
    console.log('dispatch add unit:', unit);
    return {
        type: 'ADD_UNIT',
        unit
    }
};

export const addUnits = (units) => ({
    type: 'ADD_UNITS',
    units
});

export const startSetUnits = (unitSet) => {
    console.log('get data from firebase');
    return (dispatch) => {
        database.ref(`units/${unitSet}`).once('value').then((data) => {    
            console.log('data fetched from firebase', data);
            dispatch({
                type: 'POPULATE_UNITS',
                team: data
            })
        });
    }
}