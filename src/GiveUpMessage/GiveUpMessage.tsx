import React from 'react';

import { IProps } from './types';


const GiveUpMessage = (props: IProps) => {
    return props.display ? (
        <div data-test="give-up-message" className="alert alert-danger">
            The secret word was "{props.secretWord}"<br />
            Better luck next time!
        </div>
    ) : null;
};

export default GiveUpMessage;
