import React from 'react';
import UnitList from './UnitList';
import TeamList from './TeamList';

/**
 * Holds the list of available units and current team.
 */

const TeamBuilder = () => {
    return (
        <div>
            <h1 className="page-header">Build Your Team</h1>
            <div className="list-comparator">
                <TeamList />
                <UnitList />
            </div>
        </div>
    )
}

export { TeamBuilder as default };