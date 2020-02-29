import { IAction } from '../../types';
import { ActionTypes as ActionTypesCommon } from '../../common/types/ActionTypes';

import {  IState } from '../types/redux';
import { ActionTypes } from '../types/ActionTypes';


const initialState = false;

export default (state: IState = initialState, action: IAction): boolean => {
    switch (action.type) {
        case ActionTypes.CorrectGuess: return true;
        case ActionTypesCommon.ResetGame: return initialState;
        default: return state;
    }
}
