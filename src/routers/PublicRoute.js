import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import AppContext from '../context/app-context';

export const PublicRoute = ({
    component: Component,
    ...rest
}) => {
    const {auth} = useContext(AppContext);
    console.log(`Public Route auth: `, auth);
    return (
        <Route {...rest} component={(props) => (
            !!auth.uuid ? (
                    <Redirect to="/setup" />
                ): (
                    <Component {...props} />
                )
        )} />
    )
}
    

export default PublicRoute;