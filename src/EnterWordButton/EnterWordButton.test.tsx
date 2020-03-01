import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils';

import EnterWordButton from './EnterWordButton';
import { IProps } from './types';


const setup = (props?: Partial<IProps>) => {
    const defaultProps = {display: false, setEntering: () => {}};
    return shallow(<EnterWordButton {...defaultProps} {...props} />);
};

describe('render', () => {
    test('render `user-word-button` when display is true', () => {
        const wrapper = setup({ display: true });
        const component = findByTestAttr(wrapper, "user-word-button");
        expect(component.length).toBe(1);
    });
    test('does not render `user-word-button` when display is false', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, "user-word-button");
        expect(component.length).toBe(0);
    })
});
