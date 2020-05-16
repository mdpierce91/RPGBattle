import React from 'react';
import UnitList from './UnitList';
import TeamList from './TeamList';

const TeamBuilder = () => {
    return (
        <div className="team-builder">
            <h1 className="page-header">Build Your Team</h1>
            <TeamList />
            <UnitList />
        </div>
    )
}

export { TeamBuilder as default };