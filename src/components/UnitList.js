import React, { useContext } from 'react';
import UnitListItem from './UnitListItem';
import AppContext from '../context/app-context';

export const UnitList = () => {
    const{units} = useContext(AppContext);

    return (
        <div>
            {
                units.length === 0 ? (
                    <div>
                        <span>No Units</span>
                    </div>
                ) : (
                    units.map((unit) => {
                        // console.log(`What does unit look like:`, unit);
                        // console.log(`Unit id for key: ${unit.id}`);
                        return <UnitListItem key={`unit-list-${unit.id}`} unit={unit}/>
                    })
                )
            }
        </div>
    )
}


export { UnitList as default };