import React, {useContext} from 'react';
import AppContext from '../context/app-context';

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
        <div>
            <pre>{JSON.stringify(unit)}</pre>
            <button onClick={removeFromTeam}>Remove From Team</button>
        </div>
    );
}

export { TeamListItem as default };