import React, { useContext } from 'react';
import {firebase} from '../firebase/firebase';
import { history } from '../routers/AppRouter';
import AppContext from '../context/app-context';
import {login, logout} from '../actions/auth';

export const LoadingPage = () => {
    const {authDispatch} = useContext(AppContext);
    
    firebase.auth().onAuthStateChanged((user) => {
        console.log('Auth changed');
        if (user) {
            console.log('User exists');
            authDispatch(login(user.uid));
            if (history.location.pathname === '/') {
                history.push('/setup');
            }
            
        } else {
            console.log('No user');
            authDispatch(logout());
            history.push('/home');
        }
    });
    return(
        <div className="loader">
        <img className="loader__image" src="/images/loader.gif" alt=""/>
        </div>
    );
}

export default LoadingPage;