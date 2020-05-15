import React, { useContext } from 'react';
import AppContext from '../context/app-context';

const UnitListItem = ({unit}) => {
    const{teamDispatch} = useContext(AppContext);
    const addToTeam = (unit) => {
        teamDispatch({
            type: 'ADD_TO_TEAM',
            unit
        });
    }
    return (
        <div>
            <h5 >{unit.name}</h5>
            <pre >{JSON.stringify(unit)}</pre>
            <button onClick={addToTeam(unit)}>Add</button>
        </div>
    );
}

export { UnitListItem as default };