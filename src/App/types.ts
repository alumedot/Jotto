import { ShallowWrapper } from 'enzyme';

import { IState as IStateGuessedWords } from '../store/guessedWords/types/redux';

import { AppUnconnected } from './App';


export interface IReduxInjectedState {
    secretWord: string;
    guessedWords: IStateGuessedWords;
    success: boolean;
}

export interface IReduxInjectedDispatch {
    getSecretWord(): void;
}

export interface IProps extends IReduxInjectedState, IReduxInjectedDispatch {}

export type IAppWrapper = ShallowWrapper<IProps, {}, AppUnconnected>;
