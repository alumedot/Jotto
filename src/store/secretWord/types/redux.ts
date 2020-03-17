import { ActionTypes } from './ActionTypes';


export interface IState {
    word: string;
    error: boolean;
}

export interface IGetSecretWord {
    type: ActionTypes.SetSecretWord;
    payload: string;
}

export interface IServerError {
    type: ActionTypes.ServerError;
}
