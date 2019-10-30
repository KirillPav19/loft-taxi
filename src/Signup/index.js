import React from 'react';

export const SignUpForm = ({setPage}) => {
    return (
        <form onSubmit={() => setPage("Login")}>
            <h1>{"SIGN UP"}</h1>
            <div>
                <input type={"email"} placeholder={"email"}>
                </input>
            </div>
            <div>
                <input type={"string"} placeholder={"Name"}>
                </input>
            </div>
            <div>
                <input type={"string"} placeholder={"Surname"}>
                </input>
            </div>
            <div>
                <input type={"password"} placeholder={"password"}>
                </input>
            </div>
            <button className={"Style-button"}>Sign up</button>
        </form>
    );
};