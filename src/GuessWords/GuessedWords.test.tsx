import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { checkProps, findByTestAttr } from '../../test/testUtils';
import GuessedWords from './GuessedWords';
import { IProps } from './types';


const defaultProps = {
    guessedWords: [
        {
            guessedWord: 'train',
            letterMatchCount: 3,
        },
    ],
};

const setup = (props: IProps) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords { ...setupProps } />);
};

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});

describe('if there are no words guessed', () => {
    let wrapper: ShallowWrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    });
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-word');
        expect(component.length).toBe(1);
    });
    test('render instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0);
    });
});

describe('if there are words guessed', () => {

});
