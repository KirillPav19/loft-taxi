import React from "react";
import './styles/StylesHeader.css';
import {AppConsumer} from '../App'
import {Button} from '../shared/button'

export const Header = ({setPage}) => {
    return (
        <AppConsumer>
            {
                (context) =>
                    <div className={"Style-container-button"}>
                        <Button title={'Login'} onTap={() => setPage('Login')} id={'buttonLogin'}/>
                        <Button title={'SingUp'} onTap={() => setPage("SignUp")} id={'buttonSignUp'}/>
                        <Button title={'Map'} onTap={() => context.isLoggedIn ? setPage("Map") : alert('Вы не авторизованы')} id={'buttonMap'}/>
                        <Button title={'Profile'} onTap={() => context.isLoggedIn ? setPage("Profile") : alert('Вы не авторизованы')} id={'buttonProfile'}/>
                        <Button title={'Exit'} onTap={() => context.logout()} id={'buttonExit'}/>
                    </div>
            }
        </AppConsumer>
    );
};