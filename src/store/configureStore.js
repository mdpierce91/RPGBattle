import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import teamReducer from '../reducers/team';
import unitsReducer from '../reducers/units';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Basic store to use with REDUX, has thunk added as middleware.
 */
export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            team: teamReducer,
            units: unitsReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );

    return store;
};
