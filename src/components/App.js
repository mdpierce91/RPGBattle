import React, { useReducer } from 'react';
import AppContext from '../context/app-context';
import ConfigureStore from '../store/configureStore';
import AppRouter from '../routers/AppRouter';
import authReducer from '../reducers/auth';
import unitsReducer from '../reducers/units';
import teamReducer from '../reducers/team';

export const App = () => {
    const [auth, authDispatch] = useReducer(authReducer, {});
	const [units, unitsDispatch] = useReducer(unitsReducer, []);
    const [team, teamDispatch] = useReducer(teamReducer, []);
    const store = ConfigureStore();
    return (
        <AppContext.Provider store={store} value={{units, team, auth, unitsDispatch, teamDispatch, authDispatch}}>
            <AppRouter/>
        </AppContext.Provider>
    )
}
export { App as default };