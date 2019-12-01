import React, { useState } from 'react';
import {LoginForm} from './Login/index';
import {SignUpForm} from './Signup/index';
import {MapForm} from './Map/index';
import {ProfileForm} from './Profile/index';
import {Header} from './shared/header';

const AppContext = React.createContext({})
export const AppProvider = AppContext.Provider
export const AppConsumer = AppContext.Consumer

const getPage = (page, setPage) => {
    switch (page) {
        case "Login":
            return (
                <LoginForm setPage={setPage}
                           name={'Login'}
                           navigatePage={'Map'}
                />
            )
        case "SignUp":
            return (
                <SignUpForm setPage={setPage}
                            name={'Sign Up'}
                            navigatePage={'Login'}

                />
            )
        case "Map":
            return (
                <MapForm name={'Map'}/>
            )
        case "Profile":
            return (
                <ProfileForm name={'Profile'}/>
            )
        default:
            return (
                <LoginForm setPage={setPage}
                           name={'Login'}
                           navigatePage={'Map'}
                />
            )
    }
}

function App() {
    const [page, setPage] = useState('Login')
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const login = (email, password) => {
        if (email === 'loft@.ru' && password === '1234') {
            setIsLoggedIn(true)
            setPage('Map')
        }
    }

    const logout = () => {
        setIsLoggedIn(false)
        setPage('Login')
    }
    return (
        <AppProvider value={{login, logout, isLoggedIn}}>
            <div>
                <Header setPage={setPage} id={'header'}/>
                {getPage(page, setPage)}
            </div>
        </AppProvider>
    );
}

export default App;
