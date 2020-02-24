import axios from 'axios';
import { ActionTypes } from '../types/ActionTypes';
import { IGetSecretWord } from '../types/redux';
import { ThunkResult } from '../../types';


export const getSecretWord = (): ThunkResult<Promise<IGetSecretWord>> => {
    return async (dispatch) => {
        const response = await axios.get('http://localhost:3030');
        return dispatch({
            type: ActionTypes.SetSecretWord,
            payload: response.data as string,
        });
    }
};
