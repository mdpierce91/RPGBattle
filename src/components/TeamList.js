import React, { useContext } from 'react';
import TeamListItem from './TeamListItem';
import AppContext from '../context/app-context';

/**
 * Shows the list of current units in the team.
 * If it is empty is displays a message.
 */

export const TeamList = () => {
    const {team} = useContext(AppContext);
    return (
        <div className="list-container">
            <h2>Team</h2>
            {
                team.length === 0 ? (
                    <div className="list-item">
                        <span>No Units in team</span>
                    </div>
                ) : (
                    team.map((unit) => {
                        return <TeamListItem key={`team-${unit.id}`} {...unit} />;
                    })
                )
            }
        </div>
    )
}

export { TeamList as default };