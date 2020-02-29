import React from 'react';
import PropTypes from 'prop-types';

import { Status } from '../constants';

import { IProps } from './types';


export const Congrats = (props: IProps) => {
    return props.status === Status.Victory ? (
        <div data-test="component-congrats" className="alert alert-success">
            <span data-test="congrats-message">
                Congratulations! You guessed the word!
            </span>
        </div>
    ) : (
        <div data-test="component-congrats" />
    )
};

Congrats.propTypes = {
    status: PropTypes.string.isRequired,
};

export default Congrats;
