import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import AppContext from '../context/app-context';

export const PrivateRoute = ({
    component: Component,
    ...rest
}) => {
    const {auth} = useContext(AppContext);
    console.log(`Private Route auth: `, auth);
    return (
        <Route {...rest} component={(props) => (
            !!auth.uid ? (
                <div>
                    <Header/>
                    <Component {...props} />
                </div>
            ) : (
                    <Redirect to="/home" />
                )
        )} />
    );
}

export default PrivateRoute;