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
        test('renders giveUp button', () => {
            const giveUpButton = findByTestAttr(wrapper, "giveUp-button");
            expect(giveUpButton.length).toBe(1);
        })
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
        test('render new word button', () => {
            const newWordButton = findByTestAttr(wrapper, "new-word-button");
            expect(newWordButton.length).toBe(1);
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
    test('`getSecretWord` action creator is a function prop', () => {
        const wrapper = setup();
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        expect(getSecretWordProp).toBeInstanceOf(Function);
    });
    test('`resetGame` action creator is a function prop', () => {
        const wrapper = setup();
        const resetGameProp = wrapper.instance().props.resetGame;
        expect(resetGameProp).toBeInstanceOf(Function);
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
                getSecretWord={() => {}}
                resetGame={() => {}}
            />
        );
        wrapper.setState({ currentGuess: guessedWord });
        const submitButton = findByTestAttr(wrapper, "submit-button");
        submitButton.simulate('click', { preventDefault() {} });
    });

    test('`guessWord` fired on button click', () => {
        const guessWordCallCount = guessWordMock.mock.calls.length;
        expect(guessWordCallCount).toBe(1);
    });
    test('calls `guessWord` with input value as argument', () => {
        const guessWordArg = guessWordMock.mock.calls[0][0];
        expect(guessWordArg).toBe(guessedWord);
    });
    test('input box clears on submit', () => {
        expect(wrapper.state('currentGuess')).toBe('');
    })
});

describe('`resetGame` action creator call', () => {
    let resetGameMock: jest.Mock;
    let getSecretWordMock: jest.Mock;
    let wrapper: IInputWrapper;
    beforeEach(() => {
        resetGameMock = jest.fn();
        getSecretWordMock = jest.fn();
        wrapper = shallow(
            <InputUnconnected
                success={true}
                guessWord={() => {}}
                getSecretWord={getSecretWordMock}
                resetGame={resetGameMock}
            />
        );
        const newWordButton = findByTestAttr(wrapper, "new-word-button");
        newWordButton.simulate('click');
    });

    test('`getSecretWord` fired on `new-word-button` click', () => {
        const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
        expect(getSecretWordCallCount).toBe(1);
    });
    test('`resetGame` fired on `new-word-button` click', () => {
        const resetGameCallCount = resetGameMock.mock.calls.length;
        expect(resetGameCallCount).toBe(1);
    });
});
