import { ShallowWrapper } from 'enzyme';

import { IState as IStateGuessedWords } from '../store/guessedWords/types/redux';
import { IState as IStateUserEnter } from '../store/userEnter/types/redux';
import { IState as IStateSecretWord } from '../store/secretWord/types/redux';

import { Status } from '../constants';

import { AppUnconnected } from './App';


export interface IReduxInjectedState {
    secretWord: IStateSecretWord;
    guessedWords: IStateGuessedWords;
    status: Status;
    userEnter: IStateUserEnter;
}

export interface IReduxInjectedDispatch {
    getSecretWord(): void;
    resetGame(): void;
}

export interface IProps extends IReduxInjectedState, IReduxInjectedDispatch {}

export type IAppWrapper = ShallowWrapper<IProps, {}, AppUnconnected>;
