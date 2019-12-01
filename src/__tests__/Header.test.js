import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import '../setupTests'
import {Header} from "../shared/header";
import {Button} from "../shared/button";

describe('Header', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Header/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})

// FIX TypeError: window.URL.createObjectURL is not a function
jest.mock('mapbox-gl', () => ({
    Map: () => ({})
}))