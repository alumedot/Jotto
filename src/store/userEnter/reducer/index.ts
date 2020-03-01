import { IAction } from '../../types';

import { IState, UserEnterStatus } from '../types/redux';
import { ActionTypes } from '../types/ActionTypes';


export default (state: IState, action: IAction): IState => {
    switch (action.type) {
        case ActionTypes.SetUserSecretWord: return UserEnterStatus.Done;
        case ActionTypes.SetUserEntering: return UserEnterStatus.InProgress;
        default: return null;
    }
}
