import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';

import { IAction, IRootReduxState, ThunkResult } from '../../types';
import { ActionTypes } from '../types/ActionTypes';
import { IGetSecretWord } from '../types/redux';


export const secretWordDispatch = async (dispatch: ThunkDispatch<IRootReduxState, undefined, IAction>) => {
    const response = await axios.get('http://localhost:3030');
    return dispatch({
        type: ActionTypes.SetSecretWord,
        payload: response.data as string,
    });
};

export const getSecretWord = (): ThunkResult<Promise<IGetSecretWord>> => {
    return secretWordDispatch;
};
