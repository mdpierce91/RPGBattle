import React, { useContext } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { login, logout } from '../actions/auth';
import { firebase } from '../firebase/firebase';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import NotFoundPage from '../components/NotFoundPage';
import Home from '../components/Home';
import SetupPage from '../components/SetupPage';
import LoadingPage from '../components/LoadingPage';
import AppContext from '../context/app-context';

export const history = createBrowserHistory();

const AppRouter = () => {
    let hasRendered = false;
    const {auth} = useContext(AppContext);
    // const renderApp = () => {
    //     if (!hasRendered) {
    //             hasRendered = true;
    //         else {
    //             
    //             hasRendered = true;
    //         }
    //     }
    // }
    firebase.auth().onAuthStateChanged((user) => {
        console.log('auth changed, user:', user);
        console.log('the auth is:', auth);
        if(user){
            console.log('just logged in?');
            if (history.location.pathname === '/home'){
                history.push('/setup');
            }
        }
        else{
            console.log('just logged out?');
            history.push('/home')
        }
    });

    return (
        <Router history={history}>
            <Switch>
                <PublicRoute path='/' component={LoadingPage} exact={true} />
                <PublicRoute path='/home' component={Home}/>
                <PrivateRoute path='/setup' component={SetupPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </Router>
    )
};

export default AppRouter;