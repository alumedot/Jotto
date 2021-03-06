import { storeFactory } from '../test/testUtils';
import { guessWord } from './store/guessedWords/actions';
import { Status } from './constants';


describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';

    describe('no guessed words', () => {
        let store: ReturnType<typeof storeFactory>;
        const initialState = {
            secretWord: {
                word: secretWord,
                error: false
            },
        };
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch<any>(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                status: Status.InProgress,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3,
                }],
                userEnter: null,
            };
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch<any>(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord: {
                    word: secretWord,
                    error: false,
                },
                status: Status.Victory,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5,
                }],
                userEnter: null,
            };
            expect(newState).toEqual(expectedState);
        });
    });
    describe('some guessed words', () => {
        const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
        const initialState = {
            guessedWords,
            secretWord: {word: secretWord, error: false},
        };
        let store: ReturnType<typeof storeFactory>;
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch<any>(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord: {
                    word: secretWord,
                    error: false,
                },
                status: Status.InProgress,
                guessedWords: [
                    ...guessedWords,
                    { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
                ],
                userEnter: null,
            };
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch<any>(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord: {
                    word: secretWord,
                    error: false,
                },
                status: Status.Victory,
                guessedWords: [
                    ...guessedWords,
                    { guessedWord: secretWord, letterMatchCount: 5 }
                ],
                userEnter: null,
            };
            expect(newState).toEqual(expectedState);
        });
    });
});
