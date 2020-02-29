import { ActionTypes } from './ActionTypes';
import { Status } from '../../../constants';


export type IState = Status;

export interface ICorrectGuess {
    type: ActionTypes.CorrectGuess;
}

export interface IGiveUp {
    type: ActionTypes.GiveUp,
}
