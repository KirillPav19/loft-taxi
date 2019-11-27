import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {AppConsumer} from '../App'

export const LoginForm = ({setPage, name, navigatePage}) => {

    const [state, setState] = useState({
        email: '',
        password: ''
    })

    return (
        <AppConsumer>
            {
                (context) =>
                    <form onSubmit={() => context.isLoggedIn ? setPage(navigatePage) : alert('Не верный логин или пароль')}>
                        <h1>{name.toUpperCase()}</h1>
                        <div>
                            <input type={"email"} placeholder={"email"} value={state.email} onChange={(value) => {
                                setState({...state, email: value.target.value})
                            }}>
                            </input>
                        </div>
                        <div>
                            <input type={"password"} placeholder={"password"} value={state.password}
                                   onChange={(value) => {
                                       setState({...state, password: value.target.value})
                                   }}>
                            </input>
                        </div>
                        <button className={"Style-button"} onClick={() => context.login(state.email, state.password)}>{name}</button>
                    </form>
            }
        </AppConsumer>
    );
};

LoginForm.propsTypes = {
    name: PropTypes.string,
    navigatePage: PropTypes.string,
    setPage: PropTypes.func,
}