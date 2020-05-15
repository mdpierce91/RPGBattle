import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/app-context';

export const Header = () => {
    const { authDispatch } = useContext(AppContext);
    const logout = () => {
        authDispatch({
            type: 'LOGOUT',
        });
    }
    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <Link className="header__title" to="/">
                        <h1>RPG Battle!</h1>
                    </Link>
                    <button className="button button--link">Settings</button>
                    <button className="button button--link button--logout" onClick={logout}>Logout</button>
                </div>
            </div>
        </header>
    );    
}

export { Header as default };