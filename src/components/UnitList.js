import React, { useContext } from 'react';
import UnitListItem from './UnitListItem';
import AppContext from '../context/app-context';

export const UnitList = () => {
    const {units} = useContext(AppContext);
    return (
        <div>
            {
                units.length === 0 ? (
                    <div>
                        <span>No Units</span>
                    </div>
                ) : (
                    units.map((unit) => {
                        return (
                            <span key={unit.id}>
                                <UnitListItem {...unit} />
                            </span>
                        )
                    })
                )
            }
        </div>
    )
}

export { UnitList as default };