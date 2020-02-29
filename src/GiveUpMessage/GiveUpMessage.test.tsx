import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils';

import GiveUpMessage from './GiveUpMessage';
import { IProps } from './types';


const secretWord = 'party';

const setup = (props?: Partial<IProps>) => {
    return shallow(<GiveUpMessage display={true} secretWord={secretWord} {...props} />)
};

test('render component on `display` true prop', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "give-up-message");
    expect(component.length).toBe(1);
});
test("doesn't render component on `display` false prop", () => {
    const wrapper = setup({ display: false });
    const component = findByTestAttr(wrapper, "give-up-message");
    expect(component.length).toBe(0);
});
test('includes `secretWord` string in the message', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, "give-up-message");
    expect(component.text()).toContain(secretWord)
});
