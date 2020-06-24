import React from 'react';
import UnitDisplay from './UnitDisplay';
import { removeFromTeam } from '../actions/team';
import { connect } from 'react-redux';

/**
 * Displays a single unit and its information.
 * Also contains a button to remove this unit from the team.
 * @param {object} unit - A single unit
 */

const TeamListItem = ({dispatchRemoveFromTeam, ...unit}) => {
    // const {teamDispatch} = useContext(AppContext);
    // const removeFromTeam = () => {
    //     console.log(`remove id:${unit.id} from team`);
        
    //     // Dispatch remove with this unit's id.
    //     teamDispatch({
    //         type: 'REMOVE_FROM_TEAM',
    //         id: unit.id
    //     });
    // }   
    return (
        <div className="list-item" >
            <UnitDisplay {...unit} />
            <button className="button" onClick={() => dispatchRemoveFromTeam(unit.id)}>X</button>
        </div>
    );
}

const mapdispatchToProps = (dispatch) => ({
    dispatchRemoveFromTeam: (id) => {
        console.log('remove id: ', id);
        dispatch(removeFromTeam(id))
    }
});

export default connect(undefined, mapdispatchToProps)(TeamListItem); 