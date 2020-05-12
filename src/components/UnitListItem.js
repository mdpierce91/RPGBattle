import React from 'react';

const UnitListItem = ({...unit}) => {
    return (
        <div>
            <span>{unit.name}</span>
            <span>{unit.id}</span>
        </div>
    );
}

export { UnitListItem as default };