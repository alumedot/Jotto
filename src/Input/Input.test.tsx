import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input, { InputUnconnected } from './Input';
import { IInputWrapper, IProps } from './types';
import { Status } from '../constants';


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
            const initialState = { status: Status.InProgress };
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
            const initialState = { status: Status.Victory };
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
    describe('`Give Up` button has been clicked', () => {
        let wrapper: IInputWrapper;
        beforeEach(() => {
            const initialState = { status: Status.GiveUp };
            wrapper = setup(initialState);
        });
        test('does not render `giveUp-button` component', () => {
            const gibeUpButton = findByTestAttr(wrapper, "giveUp-button");
            expect(gibeUpButton.length).toBe(0);
        });
        test('does not render submit button component', () => {
            const gibeUpButton = findByTestAttr(wrapper, "submit-button");
            expect(gibeUpButton.length).toBe(0);
        });
    });
});

describe('redux props', () => {
    test('has `victory` piece of state as prop', () => {
        const status = Status.Victory;
        const wrapper = setup({ status });
        const statusProp = wrapper.instance().props.status;

        expect(statusProp).toBe(status);
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
                status={Status.InProgress}
                guessWord={guessWordMock}
                giveUp={() => {}}
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
