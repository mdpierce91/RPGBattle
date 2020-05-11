import React from 'react';
import { shallow } from 'enzyme';
import Home from '../../components/Home';

test('Should render the home page', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
});