import React from 'react';
import UnitListItem from './UnitListItem';
// import AppContext from '../context/app-context';
import { connect } from 'react-redux';

/**
 * Shows the list of currently available units.
 * If it is empty is displays a message.
 */

export const UnitList = ({ units }) => {
    // const {units} = useContext(AppContext);
    return (
        <div className="list-container">
            <h2>Available Units</h2>
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

const mapStateToProps = (state) => ({
    units: state.units
});

export default connect(mapStateToProps)(UnitList);