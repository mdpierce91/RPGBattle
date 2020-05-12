import React from 'react';
import { shallow } from 'enzyme';
import SetupPage from '../../components/SetupPage';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<SetupPage/>);
});

test('should render setup page', () => {
    expect(wrapper).toMatchSnapshot();
})