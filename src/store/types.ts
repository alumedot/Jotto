import { ThunkAction } from 'redux-thunk';

import { IState as IStateStatus} from './status/types/redux';
import { IState as IStateSecretWord} from './secretWord/types/redux';
import { IState as IStateGuessedWords } from './guessedWords/types/redux';
import { IState as IStateUserEnter } from './userEnter/types/redux';

import { IGuessWord } from './guessedWords/types/redux';
import { ICorrectGuess, IGiveUp } from './status/types/redux';
import { IGetSecretWord, IServerError } from './secretWord/types/redux';
import { IResetGame } from './common/types/redux';
import { IAction as IActionUserEnter } from './userEnter/types/redux';


export interface IRootReduxState {
    status: IStateStatus;
    secretWord: IStateSecretWord;
    guessedWords: IStateGuessedWords;
    userEnter: IStateUserEnter;
}

export type IAction =
    IGuessWord |
    ICorrectGuess |
    IGiveUp |
    IGetSecretWord |
    IServerError |
    IResetGame |
    IActionUserEnter;

export type ThunkResult<R> = ThunkAction<R, IRootReduxState, undefined, IAction>;
