import React, { useContext } from 'react';
import TeamListItem from './TeamListItem';
import AppContext from '../context/app-context';

export const TeamList = () => {
    const {team} = useContext(AppContext);
    return (
        <div>
            {
                team.length === 0 ? (
                    <div>
                        <span>No Units in team</span>
                    </div>
                ) : (
                    team.map((unit) => {
                        return (
                            <span key={`team-${unit.id}`}>
                                <TeamListItem  {...unit} />
                            </span>

                        )
                    })
                )
            }
        </div>
    )
}

export { TeamList as default };