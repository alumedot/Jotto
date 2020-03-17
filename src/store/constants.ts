import { IRootReduxState } from './types';

import { Status } from '../constants';


export const DEFAULT_REDUX_STATE: IRootReduxState = {
    status: Status.InProgress,
    guessedWords: [],
    secretWord: {
        word: '',
        error: false,
    },
    userEnter: null,
};
