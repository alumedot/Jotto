import { ShallowWrapper } from 'enzyme';

import { IState as IStateGuessedWords } from '../store/guessedWords/types/redux';

import { Status } from '../constants';

import { AppUnconnected } from './App';


export interface IReduxInjectedState {
    secretWord: string;
    guessedWords: IStateGuessedWords;
    status: Status;
}

export interface IReduxInjectedDispatch {
    getSecretWord(): void;
    resetGame(): void;
}

export interface IProps extends IReduxInjectedState, IReduxInjectedDispatch {}

export type IAppWrapper = ShallowWrapper<IProps, {}, AppUnconnected>;
