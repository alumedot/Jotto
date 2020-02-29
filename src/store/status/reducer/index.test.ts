import { Status } from '../../../constants';

import { ActionTypes } from '../types/ActionTypes';
import reducer from './index';


test('return default initial state of `inProgress` when no action is passed', () => {
        const newState = reducer(undefined, {} as any);
        expect(newState).toBe(Status.InProgress);
});
test('return state of `victory` upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = reducer(undefined, { type: ActionTypes.CorrectGuess });
    expect(newState).toBe(Status.Victory);
});
