import { ShallowWrapper } from 'enzyme';
import { InputUnconnected } from './Input';


export interface IReduxInjectedState {
    success: boolean;
}

export interface IReduxInjectedDispatch {
    guessWord(word: string): void;
}

export interface IProps extends IReduxInjectedState, IReduxInjectedDispatch {}

export interface IState {
    value: string;
}

export type IInputWrapper = ShallowWrapper<IProps, {}, InputUnconnected>;
