import axios from 'axios';
import { ThunkDispatch } from 'redux-thunk';

import { IAction, IRootReduxState, ThunkResult } from '../../types';
import { ActionTypes } from '../types/ActionTypes';
import { IGetSecretWord } from '../types/redux';

const wordnikKey = '5vl8hqmmi8dw4lwe13jcd5zf0q3cenlh1zqci78gk2jp1wdbj';
export const WORDNIK_URL = `https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&minCorpusCount=1000&minDictionaryCount=100&maxDictionaryCount=-1&minLength=5&maxLength=5&api_key=${wordnikKey}`;


export const secretWordDispatch = async (dispatch: ThunkDispatch<IRootReduxState, undefined, IAction>) => {
    const response = await axios.get('http://localhost:3030');
    return dispatch({
        type: ActionTypes.SetSecretWord,
        payload: response.data as string,
    });
};

const getSecretWordWordnikDispatch = async (dispatch: ThunkDispatch<IRootReduxState, undefined, IAction>) => {
    try {
        const response = await axios.get(WORDNIK_URL);
        dispatch({
            type: ActionTypes.SetSecretWord,
            payload: response.data.word
        });
    } catch (e) {
        dispatch({ type: ActionTypes.ServerError });
    }
};

export const getSecretWord = (): ThunkResult<Promise<IGetSecretWord>> => {
    return secretWordDispatch;
};
