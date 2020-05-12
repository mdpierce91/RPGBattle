import React from 'react';
import { shallow } from 'enzyme';
import { UnitList } from '../../components/UnitList';
import unitExamples from '../fixtures/units';

let wrapper;

beforeEach(() => {
});

test('should an empty unit list when no units are passed in', () => {
    wrapper = shallow(<UnitList units={[]} />);
    expect(wrapper.find('span').text()).toBe("No Units");
    expect(wrapper).toMatchSnapshot();
});

test('should render units in list when units are passed in', () => {
    wrapper = shallow(<UnitList units={unitExamples}/>);
    expect(wrapper).toMatchSnapshot();
})