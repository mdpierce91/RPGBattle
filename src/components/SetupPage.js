import React, { useEffect, useContext } from 'react';
import TeamBuilder from './TeamBuilder';
import { getRandomUnits } from '../models/UnitRandomizer';
import AppContext from '../context/app-context';

const SetupPage = () => {
    const {units, team, unitsDispatch, teamDispatch} = useContext(AppContext);


	// useEffect(() => {
    //     console.log('This should happen at the start');
    //     console.log(`    units:`, units);
    //     console.log(`    team:`, team);
	// 	const lsTeam = JSON.parse(localStorage.getItem('team'));
	// 	const lsUnits = JSON.parse(localStorage.getItem('units'));

	// 	if (lsUnits) {
	// 		teamDispatch({ type: 'POPULATE_UNITS', units: lsUnits});
	// 	}

	// 	if (lsTeam) {
	// 		teamDispatch({ type: 'POPULATE_TEAM', team: lsTeam});
	// 	}
    // }, [])
    
	// useEffect(() => {
    //     console.log('updating units');
	// 	localStorage.setItem('units', JSON.stringify(units))
	// }, [units]);

	// useEffect(() => {
    //     console.log('updating team');
	// 	localStorage.setItem('team', JSON.stringify(team))
    // }, [team]);
    

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
            {/* Team Builder */}
            <TeamBuilder />
            {/* Show available fights */}
            <button onClick={createUnit}>Add Random Unit</button>
            <button onClick={createUnits}>Add 25 Random Units</button>
            <button>Find Battle!</button>
        </div>
    );
}

export { SetupPage as default };