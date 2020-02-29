import { getLetterMatchCount } from 'helpers';

import { ActionTypes as ActionTypesGuessedWords } from '../types/ActionTypes';
import { ActionTypes as ActionTypesSuccess } from '../../status/types/ActionTypes';
import { ThunkResult } from '../../types';
import { IGuessWord } from '../types/redux';


export const guessWord = (guessedWord: string): ThunkResult<IGuessWord> => {
    return (dispatch, getState) => {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        guessedWord === secretWord && dispatch({ type: ActionTypesSuccess.CorrectGuess });

        return dispatch({
            type: ActionTypesGuessedWords.GuessWord,
            payload: { guessedWord, letterMatchCount },
        });
    };
};
