import { ActionTypes } from '../types/ActionTypes';
import { IState } from '../types/redux';
import { IAction } from '../../types';


export default (state: IState = [], action: IAction): IState => {
    switch (action.type) {
        case ActionTypes.GuessWord: return [...state, action.payload];
        default: return state;
    }
}
