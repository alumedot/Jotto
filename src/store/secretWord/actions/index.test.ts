import moxios from 'moxios';

import { storeFactory } from '../../../../test/testUtils';

import { getSecretWord } from './index';


describe('getSecretWord action creator', () => {
    beforeEach(() => {
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });
    test('add response word to state', async () => {
        const secretWord = 'party';
        const store = storeFactory();
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: secretWord,
            });
        });

        await store.dispatch<any>(getSecretWord());
        const newState = store.getState();
        expect(newState.secretWord.word).toBe(secretWord);
    });
});
