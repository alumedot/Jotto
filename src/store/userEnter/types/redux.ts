import { ActionTypes } from './ActionTypes';


export enum UserEnterStatus {
    InProgress = 'InProgress',
    Done = 'Done',
}

export type IState = UserEnterStatus | null;

export interface ISetUserEntering {
    type: ActionTypes.SetUserEntering;
}

export interface ISetUserEntered {
    type: ActionTypes.SetUserEntered;
}

export interface ISetUserSecretWord {
    type: ActionTypes.SetUserSecretWord;
    payload: string;
}

export type IAction = ISetUserEntering | ISetUserEntered | ISetUserSecretWord;
