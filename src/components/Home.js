import React from 'react';
import LoginPage from './LoginPage';

/**
 * Container for the default(not logged in) redirect.
 * Currently is a wrapper for the Login Page.
 */
const Home = () => {
    return (
        <div className="container home-container">
            <LoginPage/>
        </div>
    );
}

export { Home as default };