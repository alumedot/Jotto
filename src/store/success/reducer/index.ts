import { ICorrectGuess, IState } from '../types/redux';
import { ActionTypes } from '../types/ActionTypes';


export default (state: IState = false, action: ICorrectGuess): boolean => {
    switch (action.type) {
        case ActionTypes.CorrectGuess: return true;
        default: return state;
    }
}
