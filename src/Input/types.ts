import { ShallowWrapper } from 'enzyme';
import { InputUnconnected } from './Input';


export interface IReduxInjectedState {
    success: boolean;
}

export interface IReduxInjectedDispatch {
    guessWord(word: string): void;
    getSecretWord(): void;
    resetGame(): void;
}

export interface IProps extends IReduxInjectedState, IReduxInjectedDispatch {}

export interface IState {
    currentGuess: string;
    isGiveUp: boolean;
}

export type IInputWrapper = ShallowWrapper<IProps, {}, InputUnconnected>;
