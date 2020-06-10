import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

/**
 * This presents the login buttons to the user.
 * Currently only allows login with Google.
 * @param {object} props - Props for the constructor
 */
export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">RPGBattle</h1>
            <p>It's time to Battle</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);