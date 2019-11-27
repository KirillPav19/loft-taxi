import React from 'react';
import PropTypes from "prop-types";
import {LoginForm} from "../Login";

export const SignUpForm = ({setPage, name, navigatePage}) => {
    return (
        <form onSubmit={() => setPage(navigatePage)}>
            <h1>{name.toUpperCase()}</h1>
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
            <button className={"Style-button"}>{name}</button>
        </form>
    );
};

LoginForm.propsTypes = {
    name: PropTypes.string,
    navigatePage: PropTypes.string,
    setPage: PropTypes.func
}