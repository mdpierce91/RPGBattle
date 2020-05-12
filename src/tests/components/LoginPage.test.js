import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

// Enzyme.configure({ adapter: new Adapter() });
let startLogin, wrapper;

beforeEach(() => {
    startLogin = jest.fn();
    wrapper = shallow(<LoginPage startLogin={startLogin} />);
}) 

test('should render the login page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    wrapper.find('.button').simulate('click');
    expect(startLogin).toHaveBeenCalled();
});
