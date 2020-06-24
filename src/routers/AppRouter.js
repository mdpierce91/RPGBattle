import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';
import SetupPage from '../components/SetupPage';
import database from '../firebase/firebase';

export const history = createBrowserHistory();

/**
 * Handles page routing for the app.
 * Also contains the LocalStorage logic for units.
 */
const AppRouter = ({ uid, units, team }) => {
    // const [units, unitsDispatch] = useReducer(unitsReducer, [])
    // const [team, teamDispatch] = useReducer(teamReducer, [])
    console.log('units: ', units);
    console.log('team: ', team);

    // useEffect(() => {
    //     console.log('localstorage -> units & team');
    //     // Get from localstorage.
    //     const unitsData = JSON.parse(localStorage.getItem('units'));
    //     // Get from database.
    //     database.ref(`users/${uid}/team`).once('value').then((data) => {
    //         unitsData = data;
    //     });
    //     // Get from localstorage.
    //     const teamData = JSON.parse(localStorage.getItem('team'));
    //     // Get from database.
    //     const

    //     if (unitsData){
    //         unitsDispatch({
    //             type: 'POPULATE_UNITS',
    //             units: unitsData
    //         });
    //     }
    //     if (teamData) {
    //         teamDispatch({
    //             type: 'POPULATE_TEAM',
    //             team: teamData
    //         });
    //     }
    // }, [])
    // useEffect(() => {
    //     console.log('units -> localstorage');
    //     localStorage.setItem('units', JSON.stringify(units));
    // }, [units])
    useEffect(() => {
        console.log('team -> database');
        // localStorage.setItem('team', JSON.stringify(team));
        database.ref(`users/${uid}/team`).set(team);
    }, [team, uid])

    return (
        // <AppContext.Provider >
            <Router history={history}>
                <div>
                    <Switch>
                        <PublicRoute path='/' component={Home} exact={true} />
                        <PrivateRoute path='/setup' component={SetupPage} />
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </Router>
        // </AppContext.Provider>
    );
}

const mapStateToProps = (state) => ({
    uid: state.auth.uid,
    team: state.team,
    units: state.units
});

export default connect(mapStateToProps)(AppRouter);