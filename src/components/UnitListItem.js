import React from 'react';
// import AppContext from '../context/app-context';
import UnitDisplay from './UnitDisplay';
import { addToTeam } from '../actions/team';
import { connect } from 'react-redux';

/**
 * Displays a single unit and its information.
 * Also contains a button to add this unit to the team.
 * @param {object} unit - A single unit
 */

const UnitListItem = ({dispatchAddToTeam, ...unit}) => {
    // const { teamDispatch } = useContext(AppContext);

    // const addToTeam = () => {
    //     console.log(`Add id:${unit.id} to team`);

    //     // Dispatch add with this unit.
    //     teamDispatch({
    //         type: 'ADD_TO_TEAM',
    //         unit
    //     });
    // }   
    return (
        <div className="list-item" >
            <UnitDisplay {...unit}/>
            <button className="button" onClick={() => dispatchAddToTeam(unit)}>Add To Team</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    dispatchAddToTeam: (unit) => dispatch(addToTeam(unit))
});

export default connect(undefined, mapDispatchToProps)(UnitListItem);