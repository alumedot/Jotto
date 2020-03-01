import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../../test/testUtils';

import { DEFAULT_REDUX_STATE } from '../store/constants';
import { IRootReduxState } from '../store/types';

import App, { AppUnconnected } from './App';
import { IProps } from './types';
import { Status } from '../constants';


const setup = (initialState: Partial<IRootReduxState> = DEFAULT_REDUX_STATE) => {
    const store = storeFactory(initialState);
    return shallow<AppUnconnected, IProps>(
        // @ts-ignore
        <App store={store} />
    ).dive<AppUnconnected, IProps>().dive<AppUnconnected, IProps>();
};

describe('redux properties', () => {
    test('has access to `status` state', () => {
        const status = Status.InProgress;
        const wrapper = setup({ status });
        const statusProp = wrapper.instance().props.status;
        expect(statusProp).toBe(status);
    });
    test('has access to `secretWord` state', () => {
        const secretWord = 'party';
        const wrapper = setup({ secretWord });
        const secretWordProp = wrapper.instance().props.secretWord;
        expect(secretWordProp).toBe(secretWord);
    });
    test('has access to `guessedWords` state', () => {
        const guessedWords: any = [{ guessedWord: 'agile', letterMatchCount: 1}];
        const wrapper = setup({ guessedWords });
        const guessedWordsProp = wrapper.instance().props.guessedWords;
        expect(guessedWordsProp).toEqual(guessedWords);
    });
    test('`getSecretWord` action creator is a function on the props', () => {
        const wrapper = setup();
        const getSecretWordAction = wrapper.instance().props.getSecretWord;
        expect(getSecretWordAction).toBeInstanceOf(Function);
    });
    test('has access to `userEnter` state', () => {
        const wrapper = setup();
        const userEnterProp = wrapper.instance().props.userEnter;
        expect(userEnterProp).toBe(null);
    })
});

test('`getSecretWord` runs on App mount', () => {
    const getSecretWordMock = jest.fn();
    const wrapper = shallow(
        <AppUnconnected
            secretWord={''}
            userEnter={null}
            guessedWords={[]}
            status={Status.InProgress}
            getSecretWord={getSecretWordMock}
            resetGame={() => {}}
        />
    );
    wrapper.instance().componentDidMount!();
    const getSecretWordCallCount = getSecretWordMock.mock.calls.length;
    expect(getSecretWordCallCount).toBe(1);
});
