import { IState as IStateStatus} from './status/types/redux';
import { IState as IStateSecretWord} from './secretWord/types/redux';
import { IState as IStateGuessedWords } from './guessedWords/types/redux';

import { IGuessWord } from './guessedWords/types/redux';
import { ICorrectGuess, IGiveUp } from './status/types/redux';
import { IGetSecretWord } from './secretWord/types/redux';
import { IResetGame } from './common/types/redux';
import { ThunkAction } from 'redux-thunk';


export interface IRootReduxState {
    status: IStateStatus;
    secretWord: IStateSecretWord;
    guessedWords: IStateGuessedWords;
}

export type IAction =
    IGuessWord |
    ICorrectGuess |
    IGiveUp |
    IGetSecretWord |
    IResetGame;

export type ThunkResult<R> = ThunkAction<R, IRootReduxState, undefined, IAction>;
