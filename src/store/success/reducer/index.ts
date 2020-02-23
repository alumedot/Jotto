import { ICorrectGuess } from '../types/redux';
import { ActionTypes } from '../types/ActionTypes';


export default (state: boolean = false, action: ICorrectGuess): boolean => {
    switch (action.type) {
        case ActionTypes.CorrectGuess: return true;
        default: return state;
    }
}
