import { IGetSecretWord, IState } from '../types/redux';
import { ActionTypes } from '../types/ActionTypes';


export default (state: IState = '', action: IGetSecretWord): IState => {
    switch (action.type) {
        case ActionTypes.SetSecretWord: return action.payload;
        default: return state;
    }
}
