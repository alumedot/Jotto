import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../../test/testUtils';

import { DEFAULT_REDUX_STATE} from '../store/constants';
import { IRootReduxState } from '../store/types';

import App from './App';
import { App as AppUnconnected } from './App';
import { IProps } from './types';


const setup = (initialState: Partial<IRootReduxState> = DEFAULT_REDUX_STATE) => {
    const store = storeFactory(initialState);
    return shallow<AppUnconnected, IProps>(
        // @ts-ignore
        <App store={store} />
    ).dive<AppUnconnected, IProps>().dive<AppUnconnected, IProps>();
};

describe('redux properties', () => {
    test('has access to `success` state', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success);
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
});
