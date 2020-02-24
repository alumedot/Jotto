import { Dispatch } from 'redux';

import { getLetterMatchCount } from 'helpers';

import { ActionTypes as ActionTypesGuessedWords } from '../types/ActionTypes';
import { ActionTypes as ActionTypesSuccess } from '../../success/types/ActionTypes';
import { IRootReduxState } from '../../types';


export const guessWord = (guessedWord: string) => {
    return function(dispatch: Dispatch, getState: () => IRootReduxState) {
        const secretWord = getState().secretWord;
        const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

        dispatch({
            type: ActionTypesGuessedWords.GuessWord,
            payload: { guessedWord, letterMatchCount },
        });

        guessedWord === secretWord && dispatch({ type: ActionTypesSuccess.CorrectGuess })
    };
};
