import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

/**
 * The type of route to use for a component that is only for users who are not logged in.
 * Redirects to the setup page if they are logged in.
 * @param {obj} props - Contains the auth data.
 */
export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                    <Redirect to="/Setup" />
                ): (
                    <Component {...props} />
                )
        )} />
    );
    
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);