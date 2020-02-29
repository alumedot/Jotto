import { IAction } from '../../types';
import { ActionTypes as ActionTypesCommon } from '../../common/types/ActionTypes';

import { Status } from '../../../constants';

import { IState } from '../types/redux';
import { ActionTypes } from '../types/ActionTypes';


const initialState = Status.InProgress;

export default (state: IState = initialState, action: IAction): Status => {
    switch (action.type) {
        case ActionTypes.CorrectGuess: return Status.Victory;
        case ActionTypesCommon.ResetGame: return initialState;
        case ActionTypes.GiveUp: return Status.GiveUp;
        default: return state;
    }
}
