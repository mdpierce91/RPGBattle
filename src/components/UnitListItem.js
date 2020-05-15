import React from 'react';

const UnitListItem = ({...unit}) => {
    return (
        <div>
            <pre>{JSON.stringify(unit)}</pre>
        </div>
    );
}

export { UnitListItem as default };