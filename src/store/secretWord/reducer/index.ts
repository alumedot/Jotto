import { IState } from '../types/redux';
import { ActionTypes } from '../types/ActionTypes';
import { IAction } from '../../types';


export default (state: IState = '', action: IAction): IState => {
    switch (action.type) {
        case ActionTypes.SetSecretWord: return action.payload;
        default: return state;
    }
}
