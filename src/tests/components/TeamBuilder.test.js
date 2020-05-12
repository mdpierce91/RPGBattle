import React from 'react';
import { shallow } from 'enzyme';
import TeamBuilder from '../../components/TeamBuilder';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<TeamBuilder/>);
});

test('should render TeamBuilder', () => {
    expect(wrapper).toMatchSnapshot();
});