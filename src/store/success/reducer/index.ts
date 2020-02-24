import {  IState } from '../types/redux';
import { ActionTypes } from '../types/ActionTypes';
import { IAction } from '../../types';


export default (state: IState = false, action: IAction): boolean => {
    switch (action.type) {
        case ActionTypes.CorrectGuess: return true;
        default: return state;
    }
}
