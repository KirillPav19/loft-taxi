import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import '../setupTests'

describe('App', () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Header', () => {
        const wrapper = shallow(<App/>);
        expect(wrapper.find('#header').length === 1).toEqual(true);
    });

    it('renders correctly', () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

})

// FIX TypeError: window.URL.createObjectURL is not a function
jest.mock('mapbox-gl', () => ({
    Map: () => ({})
}))