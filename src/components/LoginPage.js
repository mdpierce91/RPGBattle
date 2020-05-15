import React, { useContext } from 'react';
import AppContext from '../context/app-context';

export const LoginPage = () => {
    const {auth, authDispatch} = useContext(AppContext);
    const login =() => {
        authDispatch({
            type: 'LOGIN',
            uuid: auth.uuid
        });
    }
    return (
        <div className="box-layout">
            <div className="box-layout__box">
                <h1 className="box-layout__title">RPGBattle</h1>
                <p>It's time to Battle</p>
                <button className="button" onClick={login}>Login with Google</button>
            </div>
        </div>
    );
}
    
export { LoginPage as default };