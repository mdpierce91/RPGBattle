import React from 'react';
import UnitList from './UnitList';
import TeamList from './TeamList';

const TeamBuilder = () => {
    return (
        <div>
            <TeamList />
            <UnitList />
        </div>
    )
}

export { TeamBuilder as default };