import { ActionTypes } from './ActionTypes';

export type IState = boolean;

export interface ICorrectGuess {
    type: ActionTypes.CorrectGuess;
}
