import reducer from './index';
import { ActionTypes } from '../types/ActionTypes';
import { UserEnterStatus } from '../types/redux';


test('return `inProgress upon receiving `ISetUserEntering` action', () => {
    const newState = reducer(null, { type: ActionTypes.SetUserEntering });
    expect(newState).toBe(UserEnterStatus.InProgress);
});

