import React from 'react';
import { shallow } from 'enzyme';

import Congrats from './Congrats';
import { checkProps, findByTestAttr } from '../../test/testUtils';

import { Status } from '../constants';

import { IProps } from './types';


const defaultProps = { status: Status.InProgress };

const setup = (props?: IProps) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats {...setupProps} />);
};

test('renders without error', () => {
    const wrapper = setup({ status: Status.InProgress });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);

});
test('renders no text when `status` prop is `inProgress`', () => {
    const wrapper = setup({ status: Status.InProgress });
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('');
});
test('renders non-empty congrats message when `status` props is `victory`', () => {
    const wrapper = setup({ status: Status.Victory });
    const message = findByTestAttr(wrapper, 'congrats-message');
    expect(message.text().length).not.toBe(0);
});
test('does not throw warning with expected props', () => {
    const expectedProps = { status: Status.InProgress };
    checkProps<IProps>(Congrats, expectedProps);
});
