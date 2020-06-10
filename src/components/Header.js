import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

/**
 * The top header bar on the page.
 * Contains the Settings & Logout buttons.
 * @param {object} props - The properties pass to Header
 */

export const Header = ({ startLogout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/">
                    <h1>RPG Battle</h1>
                </Link>
                <div>
                    <button className="button button--link">Settings</button>
                    <button className="button button--link button--logout" onClick={startLogout}>Logout</button>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);