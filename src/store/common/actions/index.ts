import { ThunkResult } from '../../types';
import { ActionTypes } from '../types/ActionTypes';
import { secretWordDispatch } from '../../secretWord/actions';

export const resetGame = (): ThunkResult<void> => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.ResetGame,
        });
        return secretWordDispatch(dispatch);
    }
};
