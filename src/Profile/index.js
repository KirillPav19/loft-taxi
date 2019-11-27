import React from 'react';
import PropTypes from "prop-types";

export const ProfileForm = ({name}) => {
    return (
        <form>
            <h1>{name}</h1>
        </form>
    );
};

ProfileForm.propsTypes = {
    name: PropTypes.string,
}