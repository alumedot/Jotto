import { Status } from '../../../constants';

import { ActionTypes } from '../types/ActionTypes';
import { ActionTypes as ActionTypesRestGame } from '../../common/types/ActionTypes';
import reducer from './index';


test('return default initial state of `inProgress` when no action is passed', () => {
        const newState = reducer(undefined, {} as any);
        expect(newState).toBe(Status.InProgress);
});
test('return state of `victory` upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = reducer(undefined, { type: ActionTypes.CorrectGuess });
    expect(newState).toBe(Status.Victory);
});
test('return state of `inProgress` upon receiving an action of type `RESET_GAME`', () => {
    const newState = reducer(undefined, { type: ActionTypesRestGame.ResetGame });
    expect(newState).toBe(Status.InProgress);
});
