import { IState } from '../types/redux';
import { ActionTypes } from '../types/ActionTypes';
import { IAction } from '../../types';

const initialState: IState = {
    word: '',
    error: false,
};

export default (state: IState = initialState, action: IAction): IState => {
    switch (action.type) {
        case ActionTypes.SetSecretWord: return {word: action.payload, error: false};
        case ActionTypes.ServerError: return {...state, error: true};
        default: return state;
    }
}
