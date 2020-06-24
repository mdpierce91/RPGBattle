import React from 'react';
import TeamBuilder from './TeamBuilder';
// import { getRandomUnits } from '../models/UnitRandomizer';
import database from '../firebase/firebase';
import { createRandomUnit, createRandomUnits } from '../actions/units';
import { connect } from 'react-redux';

/**
 * Holds the team builder and the buttons to start a game.
 */

const SetupPage = ({units, createRandomUnit, createRandomUnits}) => {
    // const { units, unitsDispatch } = useContext(AppContext);
    // const createUnit = () => {
    //     console.log('create a new unit!');
    //     let newUnit = getRandomUnits(1)[0];
    //     console.log('new unit:', newUnit);
    //     addUnit(newUnit);
    // }
    
    // const createUnits = () => {
    //     console.log('create a new units!');
    //     let newUnits = getRandomUnits(25);
    //     console.log('new unit:', newUnits);
    //     addUnits(newUnits);
    // }

    const saveUnitList = () => {
        let unitSet = 'default';
        database.ref(`units/${unitSet}`).set(units);
    }
    return (
        <div className="content-container">
            <TeamBuilder />
            <button>Find Battle!</button>
            <button onClick={createRandomUnit}>Add a Random Unit</button>
            <button onClick={createRandomUnits}>Add 25 Random Units</button>
            <button onClick={saveUnitList}>Save Unit List to Database as Default</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    units: state.units
});

const mapDispatchToProps = (dispatch) => ({
    createRandomUnit: () => {
        let toDispatch = createRandomUnit();
        console.log(toDispatch);
        dispatch(toDispatch);
    },
    createRandomUnits: () => {
        let toDispatch = createRandomUnits();
        console.log(toDispatch);
        dispatch(toDispatch);
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(SetupPage);