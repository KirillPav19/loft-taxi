import React, { useState } from 'react';
import {LoginForm} from './Login/index';
import {SignUpForm} from './Signup/index';
import {MapForm} from './Map/index';
import {ProfileForm} from './Profile/index';
import {Header} from './shared/header';

const getPage = (page, setPage) => {
    switch (page) {
        case "Login":
            return (
                <LoginForm setPage={setPage}/>
            )
        case "SignUp":
            return (
                <SignUpForm setPage={setPage}/>
            )
        case "Map":
            return (
                <MapForm/>
            )
        case "Profile":
            return (
                <ProfileForm/>
            )
    }
}

function App() {
    const [page, setPage] = useState("Login")
    return (
        <div>
            <Header setPage={setPage}/>
            {getPage(page, setPage)}
        </div>
    );
}

export default App;
