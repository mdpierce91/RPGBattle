import React, { useContext } from 'react';
import UnitListItem from './UnitListItem';
import AppContext from '../context/app-context';

export const UnitList = () => {
    const {units} = useContext(AppContext);
    return (
        <div className="list-container">
            {
                units.length === 0 ? (
                    <div className="list-item">
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