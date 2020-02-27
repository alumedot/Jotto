import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input, { InputUnconnected } from './Input';
import { IProps, IInputWrapper } from './types';


const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return shallow<InputUnconnected, IProps>(
        // @ts-ignore TODO: find a way to type store
        <Input store={store}/>
    ).dive<InputUnconnected, IProps>().dive<InputUnconnected, IProps>();
};


describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper: IInputWrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });
        test('renders input box', () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(1);
        });
        test('renders submit button', () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(1);
        });
    });
    describe('word has been guessed', () => {
        let wrapper: IInputWrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });
        test('does not render input box', () => {
            const inputBox = findByTestAttr(wrapper, "input-box");
            expect(inputBox.length).toBe(0);
        });
        test('does not render submit button', () => {
            const submitButton = findByTestAttr(wrapper, "submit-button");
            expect(submitButton.length).toBe(0);
        });
    });
});

describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;

        expect(successProp).toBe(success);
    });
    test('`guessWord` action creator is a function prop', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function);
    });
});

describe('`guessWord` action creator call', () => {
    let guessWordMock: jest.Mock;
    let wrapper: IInputWrapper;
    const guessedWord = 'train';

    beforeEach(() => {
        guessWordMock = jest.fn();
        wrapper = shallow(
            <InputUnconnected
                success={false}
                guessWord={guessWordMock}
            />
        );
        wrapper.setState({ currentGuess: guessedWord });
        const submitButton = findByTestAttr(wrapper, "submit-button");
        submitButton.simulate('click', { preventDefault() {}});
    });

    test('`guessWord` fired on button click', () => {
        const guessWordCallCount = guessWordMock.mock.calls.length;
        expect(guessWordCallCount).toBe(1);
    });
    test('calls `guessWord` with input value as argument', () => {
        const guessWordArg = guessWordMock.mock.calls[0][0];
        expect(guessWordArg).toBe(guessedWord);
    })
});
