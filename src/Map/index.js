import React from 'react';
import {Map} from '../shared/Map';
import PropTypes from "prop-types";

export const MapForm = ({name}) => {
    return (
        <form>
            <h1>{name}</h1>
            <Map/>
        </form>
    );
};

MapForm.propsTypes = {
    name: PropTypes.string,
}