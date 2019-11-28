import React from "react";
import './styles/StylesHeader.css';
import {AppConsumer} from '../App'

export const Header = ({setPage}) => {
    return (
        <AppConsumer>
            {
                (context) =>
                    <div className={"Style-container-button"}>
                        <button className={"Style-button"} onClick={() => setPage('Login')}>Login</button>
                        <button className={"Style-button"} onClick={() => setPage("SignUp")}>SingUp</button>
                        <button className={"Style-button"} onClick={() => context.isLoggedIn ? setPage("Map") : alert('Вы не авторизованы')}>Map</button>
                        <button className={"Style-button"} onClick={() => context.isLoggedIn ? setPage("Profile") : alert('Вы не авторизованы')}>Profile</button>
                        <button className={"Style-button"} onClick={() => context.logout()}>Exit</button>
                    </div>
            }
        </AppConsumer>
    );
};