import { IAction } from '../../types';
import { ActionTypes as ActionTypesCommon } from '../../common/types/ActionTypes';

import { ActionTypes } from '../types/ActionTypes';
import { IState } from '../types/redux';


const initialState: IState = [];

export default (state: IState = initialState, action: IAction): IState => {
    switch (action.type) {
        case ActionTypes.GuessWord: return [...state, action.payload];
        case ActionTypesCommon.ResetGame: return initialState;
        default: return state;
    }
}
