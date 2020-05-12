import React from 'react';
import { connect } from 'react-redux';
import UnitListItem from './UnitListItem';
import exampleUnits from '../tests/fixtures/units';

export const UnitList = (props) => {
    return (
        <div>
            {
                props.units.length === 0 ? (
                    <div>
                        <span>No Units</span>
                    </div>
                ) : (
                    props.units.map((unit) => {
                        return <UnitListItem key={unit.id} {...unit} />
                    })
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
	return {
		units: exampleUnits
	};
};

export default connect(mapStateToProps)(UnitList);