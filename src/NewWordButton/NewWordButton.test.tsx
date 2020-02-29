import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../test/testUtils';

import NewWordButton from './NewWordButton';
import { IProps } from './types';


const setup = (props: IProps) => {
    const defaultProps = { display: false };
    return shallow(<NewWordButton { ...defaultProps } { ...props } />);
};

describe('render', () => {
});

test('render when display is true', () => {
    const wrapper = setup({ display: true, resetGame: () => {} });
    const button = findByTestAttr(wrapper, "new-word-button");
    expect(button.length).toBe(1);
});

test('calls `resetGame` action upon button click', () => {
    const resetGameMock = jest.fn();
    const wrapper = setup({ display: true, resetGame: resetGameMock });
    const button  = findByTestAttr(wrapper, "new-word-button");
    button.simulate('click');
    expect(resetGameMock.mock.calls.length).toBe(1);
});
