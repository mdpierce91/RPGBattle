import React, { useContext } from 'react';
import AppContext from '../context/app-context';
import UnitDisplay from './UnitDisplay';

const UnitListItem = ({...unit}) => {
    const { teamDispatch } = useContext(AppContext);
    const addToTeam = () => {
        console.log(`Add id:${unit.id} to team`);
        // Dispatch add with this unit.
        teamDispatch({
            type: 'ADD_TO_TEAM',
            unit
        });
    }   
    return (
        <div className="list-item" >
            <UnitDisplay {...unit}/>
            <button className="button" onClick={addToTeam}>Add To Team</button>
        </div>
    );
}

export { UnitListItem as default };