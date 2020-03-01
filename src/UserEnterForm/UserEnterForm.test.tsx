import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils';

import UserEnterForm from './UserEnterForm';
import { IProps } from './types';


const setup = (props?: Partial<IProps>) => {
    return shallow(<UserEnterForm setUserSecretWord={() => {}} {...props} />);
};

describe('render', () => {
    test('render correctly `user-enter-form`', () => {
        const wrapper = setup();
        const component = findByTestAttr(wrapper, "user-enter-form");
        expect(component.length).toBe(1);
    });
});

describe('submit button clicked', () => {
    let wrapper: ShallowWrapper;
    let setUserSecretWordMock: jest.Mock;
    const userSecretWord = 'party';

    beforeEach(() => {
        setUserSecretWordMock = jest.fn();
        wrapper = setup({ setUserSecretWord: setUserSecretWordMock });
        wrapper.instance().setState({ userSecretWord });
        const submitButton = findByTestAttr(wrapper, "submit-button");
        submitButton.simulate('click', { preventDefault() {} });
    });

    test('`setUserSecretWord` fired', () => {
        const setUserSecretWordCallCount = setUserSecretWordMock.mock.calls.length;
        expect(setUserSecretWordCallCount).toBe(1);
    });
    test('`setUserSecretWord` fired with a non-empty argument', () => {
        const setUserSecretWordArg = setUserSecretWordMock.mock.calls[0][0];
        expect(setUserSecretWordArg).toBe(userSecretWord);
    })
});
