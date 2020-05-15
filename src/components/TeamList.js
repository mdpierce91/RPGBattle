import React, { useContext } from 'react';
import UnitListItem from './UnitListItem';
import AppContext from '../context/app-context';

export const TeamList = () => {
    const {team} = useContext(AppContext)
    return (
        <div>
            {
                team.length === 0 ? (
                    <div>
                        <span>No Units in team</span>
                    </div>
                ) : (
                    team.map((unit) => {
                        // console.log(`What does unit look like:`, unit);
                        // console.log(`Unit id for key: ${unit.id}`);
                        return <UnitListItem key={`team-list-${unit.id}`} unit={unit} />
                    })
                )
            }
        </div>
    )
}


export { TeamList as default };