import React from 'react';
import UnitList from './UnitList';
import TeamList from './TeamList';

const TeamBuilder = () => {
    return (
        <div>
            {/* Show current Team */}
            <TeamList/>
            {/* Show available units */}
            <UnitList/>
        </div>
    )
}

export { TeamBuilder as default };