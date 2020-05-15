import React, { useContext } from 'react';
import TeamBuilder from './TeamBuilder';
import AppContext from '../context/app-context';
import { getRandomUnits } from '../models/UnitRandomizer';

const SetupPage = () => {
    const { unitsDispatch } = useContext(AppContext);
    const createUnit = () => {
        let newUnit = getRandomUnits(1)[0];
        unitsDispatch({
            type: 'ADD_UNIT',
            unit: newUnit
        });
    }
    
    const createUnits = () => {
        let newUnits = getRandomUnits(25);
        unitsDispatch({
            type: 'ADD_UNITS',
            units: newUnits
        });
    }
    return (
        <div>
            <TeamBuilder />
            <button>Find Battle!</button>
            <button onClick={createUnit}>Add a Random Unit</button>
            <button onClick={createUnits}>Add 25 Random Units</button>
        </div>
    );
}

export { SetupPage as default };