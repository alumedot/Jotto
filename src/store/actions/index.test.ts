import { ActionTypes } from '../types/ActionTypes';
import { correctGuess } from './index';


describe('correctGuess', () => {
    test('returns an action with type `CORRECT_GUESS`', () => {
        const action = correctGuess();
        expect(action).toEqual({ type: ActionTypes.CorrectGuess });
    });
});
