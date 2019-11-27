import React from "react";
import './styles/StylesHeader.css';
import AppConsumer from '../App'

export const Header = ({setPage}) => {
    return (
        <AppConsumer>
            {
                (context) =>
                    <div className={"Style-container-button"}>
                        <button className={"Style-button"} onClick={() => setPage('Login')}>{'Login'}</button>
                        <button className={"Style-button"} onClick={() => setPage("SignUp")}>SingUp</button>
                        <button className={"Style-button"} onClick={() => setPage("Map")}>Map</button>
                        <button className={"Style-button"} onClick={() => setPage("Profile")}>Profile</button>
                        <button className={"Style-button"} onClick={() => context.logout()}>Exit</button>
                    </div>
            }
        </AppConsumer>
    );
};