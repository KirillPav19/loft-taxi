import React from "react";
import './styles/StylesButton.css';
import PropTypes from "prop-types";
import {ProfileForm} from "../Profile";

export const Button = ({title, onTap}) => {
    return (
        <button className={"Style-button"}
                onClick={onTap}
        >
            {title}
        </button>
    );
};

ProfileForm.propsTypes = {
    title: PropTypes.string,
    onTap: PropTypes.func,
}