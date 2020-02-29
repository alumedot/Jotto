import { ActionTypes } from '../../common/types/ActionTypes';

import reducer from './index';


test('`guessedWords` equal to [] upon `resetGame` action', () => {
    const newState = reducer([{ guessedWord: 'sdfdd', letterMatchCount: 3 }], { type: ActionTypes.ResetGame });
    expect(newState).toEqual([]);
});
