import React, { useReducer, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import unitsReducer from '../reducers/units';
import teamReducer from '../reducers/team';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';
import SetupPage from '../components/SetupPage';
import AppContext from '../context/app-context';

export const history = createBrowserHistory();

/**
 * Handles page routing for the app.
 * Also contains the LocalStorage logic for units.
 */
const AppRouter = () => {
    const [units, unitsDispatch] = useReducer(unitsReducer, [])
    const [team, teamDispatch] = useReducer(teamReducer, [])

    useEffect(() => {
        console.log('localstorage -> units & team');
        const unitsData = JSON.parse(localStorage.getItem('units'));
        const teamData = JSON.parse(localStorage.getItem('team'));

        if (unitsData){
            unitsDispatch({
                type: 'POPULATE_UNITS',
                units: unitsData
            });
        }
        if (teamData) {
            teamDispatch({
                type: 'POPULATE_TEAM',
                team: teamData
            });
        }
    }, [])
    useEffect(() => {
        console.log('units -> localstorage');
        localStorage.setItem('units', JSON.stringify(units));
    }, [units])
    useEffect(() => {
        console.log('team -> localstorage');
        localStorage.setItem('team', JSON.stringify(team));
    }, [team])

    return (
        <AppContext.Provider value={{units, team, unitsDispatch, teamDispatch}}>
            <Router history={history}>
                <div>
                    <Switch>
                        <PublicRoute path='/' component={Home} exact={true} />
                        <PrivateRoute path='/setup' component={SetupPage} />
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </Router>
        </AppContext.Provider>
    );
}

export default AppRouter;