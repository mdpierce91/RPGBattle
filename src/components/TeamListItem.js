import React, {useContext} from 'react';
import AppContext from '../context/app-context';
import UnitDisplay from './UnitDisplay';

const TeamListItem = ({...unit}) => {
    const {teamDispatch} = useContext(AppContext);
    const removeFromTeam = () => {
        console.log(`remove id:${unit.id} from team`);
        // Dispatch remove with this unit's id.
        teamDispatch({
            type: 'REMOVE_FROM_TEAM',
            id: unit.id
        });
    }   
    return (
        <div className="list-item" >
            <UnitDisplay {...unit} />
            <button className="button" onClick={removeFromTeam}>X</button>
        </div>
    );
}

export { TeamListItem as default };