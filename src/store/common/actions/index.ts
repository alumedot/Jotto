import { ThunkResult } from '../../types';
import { ActionTypes } from '../types/ActionTypes';


export const resetGame = (): ThunkResult<void> => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.ResetGame,
        });
    }
};
