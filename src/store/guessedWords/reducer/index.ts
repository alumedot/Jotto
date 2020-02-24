import { ActionTypes } from '../types/ActionTypes';
import { IState, IGuessWord } from '../types/redux';

export default (state: IState = [], action: IGuessWord): IState => {
    switch (action.type) {
        case ActionTypes.GuessWord: return [...state, action.payload];
        default: return state;
    }
}
