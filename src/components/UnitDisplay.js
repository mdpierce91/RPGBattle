import React from 'react';

export const UnitDisplay = ({...unit}) => {
    return (
        <div>
            <div className="unit-title">
                <h2>{unit.name}</h2>
                <span>{unit.speciesName === unit.name ? '': `${unit.speciesName} -`} {unit.types.length > 1 ? `${unit.types[0]}/${unit.types[1]}`: unit.types[0]}</span>
            </div>
            <div className="unit-description">
                <div className="unit-stat">
                    <div className="stat-label">Hit Points:</div>
                    <div>{unit.maxHitPoints}</div>
                </div>
                <div className="unit-stat">
                    <div className="stat-label">Attack:</div>
                    <div>{unit.physicalAttack}</div>
                </div>
                <div className="unit-stat">
                    <div className="stat-label">Defence:</div>
                    <div>{unit.physicalDefence}</div>
                </div>
                <div className="unit-stat">
                    <div className="stat-label">Magic Attack:</div>
                    <div>{unit.magicAttack}</div>
                </div>
                <div className="unit-stat">
                    <div className="stat-label">Magic Defence:</div>
                    <div>{unit.magicDefence}</div>
                </div>
                <div className="unit-stat">
                    <div className="stat-label">Speed:</div>
                    <div>{unit.speed}</div>
                </div>
            </div>
        </div>
        
    )
}
export { UnitDisplay as default };