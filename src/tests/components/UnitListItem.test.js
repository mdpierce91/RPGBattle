import React from 'react';
import { shallow } from 'enzyme';
import UnitListItem from '../../components/UnitListItem';
import units from '../fixtures/units';

let wrapper;

test('should render unit list item', () => {
    wrapper = shallow(<UnitListItem unit={units[0]}/>);
    expect(wrapper).toMatchSnapshot();
})