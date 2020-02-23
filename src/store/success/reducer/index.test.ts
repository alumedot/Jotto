import { ActionTypes } from '../types/ActionTypes';
import reducer from './index';


test('return default initial state of `false` when no action is passed', () => {
        const newState = reducer(undefined, {} as any);
        expect(newState).toBe(false);
});
test('return state of true upon receiving an action of type `CORRECT_GUESS`', () => {
    const newState = reducer(undefined, { type: ActionTypes.CorrectGuess });
    expect(newState).toBe(true);
});
