import React from 'react';
import TeamBuilder from './TeamBuilder';

const SetupPage = () => {
    return (
        <div>
            <TeamBuilder />
            <button>Find Battle!</button>
        </div>
    );
}

export { SetupPage as default };