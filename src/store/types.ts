import { IState as IStateSuccess} from './success/types/redux';
import { IState as IStateSecretWord} from './secretWord/types/redux';
import { IState as IStateGuessedWords } from './guessedWords/types/redux';

import { IGuessWord } from './guessedWords/types/redux';
import { ICorrectGuess } from './success/types/redux';


export interface IRootReduxState {
    success: IStateSuccess;
    secretWord: IStateSecretWord;
    guessedWords: IStateGuessedWords;
}

export type IAction = IGuessWord | ICorrectGuess;
