import { ShallowWrapper } from 'enzyme';
import { InputUnconnected } from './Input';
import { Status } from '../constants';


export interface IReduxInjectedState {
    status: Status;
}

export interface IReduxInjectedDispatch {
    guessWord(word: string): void;
    getSecretWord(): void;
    resetGame(): void;
    giveUp(): void;
}

export interface IProps extends IReduxInjectedState, IReduxInjectedDispatch {}

export interface IState {
    currentGuess: string;
    isGiveUp: boolean;
}

export type IInputWrapper = ShallowWrapper<IProps, {}, InputUnconnected>;
