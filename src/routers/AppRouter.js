import React, { useReducer} from 'react';
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

const AppRouter = () => {
    const [units, unitsDispatch] = useReducer(unitsReducer, [])
    const [team, teamDispatch] = useReducer(teamReducer, [])
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