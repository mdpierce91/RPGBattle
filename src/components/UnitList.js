import React, { useContext } from 'react';
import UnitListItem from './UnitListItem';
import AppContext from '../context/app-context';

export const UnitList = () => {
    const {units, teamDispatch} = useContext(AppContext);
    return (
        <div>
            {
                units.length === 0 ? (
                    <div>
                        <span>No Units</span>
                    </div>
                ) : (
                    units.map((unit) => {
                        return <UnitListItem key={unit.id} {...unit} />
                    })
                )
            }
        </div>
    )
}

export { UnitList as default };