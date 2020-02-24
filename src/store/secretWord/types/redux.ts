import { ActionTypes } from './ActionTypes';


export type IState = string;

export interface IGetSecretWord {
    type: ActionTypes.SetSecretWord;
    payload: string;
}
