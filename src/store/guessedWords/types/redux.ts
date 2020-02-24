import { ActionTypes } from './ActionTypes';


export interface IGuessedWord {
    guessedWord: string;
    letterMatchCount: number;
}

export type IState = IGuessedWord[];

export interface IGuessWord {
    type: ActionTypes.GuessWord;
    payload: IGuessedWord;
}
