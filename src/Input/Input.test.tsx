import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';

import { findByTestAttr, storeFactory } from '../../test/testUtils';
import Input from './Input';


const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    return mount(
        <Provider store={store}>
            <Input/>
        </Provider>
    );
};

describe('render', () => {
    describe('word has not been guessed', () => {
        let wrapper: ReactWrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        });
        test('renders component without error', () => {
            const component = findByTestAttr(wrapper, "component-input");
            expect(component.length).toBe(1);
        });
        test('renders input box', () => {

        });
        test('renders submit button', () => {

        });
    });
    describe('word has been guessed', () => {
        test('does not render component without error', () => {

        });
        test('does not render input box', () => {

        });
        test('does not render submit button', () => {

        });
    });
});
describe('update state', () => {

});
