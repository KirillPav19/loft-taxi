import React, {useState} from 'react';
import PropTypes from 'prop-types';
import AppConsumer from '../App'

export const LoginForm = ({setPage, name, navigatePage}) => {

    const [state, setState] = useState({
        login: '',
        password: ''
    })

    return (
        <AppConsumer>
            {
                (context) =>
                    <form onSubmit={() => context.isLoggedIn ? setPage(navigatePage) : null}>
                        <h1>{name.toUpperCase()}</h1>
                        <div>
                            <input type={"email"} placeholder={"email"} onChange={(value) => setState({...state, login: value})}>
                            </input>
                        </div>
                        <div>
                            <input type={"password"} placeholder={"password"} onSubmit={(value) => setState({...state, password: value})}>
                            </input>
                        </div>
                        <button className={"Style-button"} onClick={() => context.login(state.login, state.password)}>{name}</button>
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