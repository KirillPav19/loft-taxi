import React from 'react';

export const LoginForm = ({setPage}) => {
    return (
        <form onSubmit={() => setPage("Map")}>
            <h1>{"LOGIN"}</h1>
            <div>
                <input type={"email"} placeholder={"email"}>
                </input>
            </div>
            <div>
                <input type={"password"} placeholder={"password"}>
                </input>
            </div>
            <button className={"Style-button"}>Login</button>
        </form>
    );
};