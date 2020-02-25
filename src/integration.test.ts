import { storeFactory } from '../test/testUtils';
import { guessWord } from './store/guessedWords/actions';


describe('guessWord action dispatcher', () => {
    const secretWord = 'party';
    const unsuccessfulGuess = 'train';

    describe('no guessed words', () => {
        let store: ReturnType<typeof storeFactory>;
        const initialState = {secretWord};
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch<any>(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                ...initialState,
                success: false,
                guessedWords: [{
                    guessedWord: unsuccessfulGuess,
                    letterMatchCount: 3,
                }]
            };
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch<any>(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [{
                    guessedWord: secretWord,
                    letterMatchCount: 5,
                }]
            };
            expect(newState).toEqual(expectedState);
        });
    });
    describe('some guessed words', () => {
        const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }];
        const initialState = { guessedWords, secretWord };
        let store: ReturnType<typeof storeFactory>;
        beforeEach(() => {
            store = storeFactory(initialState);
        });
        test('updates state correctly for unsuccessful guess', () => {
            store.dispatch<any>(guessWord(unsuccessfulGuess));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: false,
                guessedWords: [
                    ...guessedWords,
                    { guessedWord: unsuccessfulGuess, letterMatchCount: 3 },
                ]
            };
            expect(newState).toEqual(expectedState);
        });
        test('updates state correctly for successful guess', () => {
            store.dispatch<any>(guessWord(secretWord));
            const newState = store.getState();
            const expectedState = {
                secretWord,
                success: true,
                guessedWords: [
                    ...guessedWords,
                    { guessedWord: secretWord, letterMatchCount: 5 }
                ]
            };
            expect(newState).toEqual(expectedState);
        });
    });
});
