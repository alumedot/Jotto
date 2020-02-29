import React, { Component } from 'react';

import { IProps } from './types';


class NewWordButton extends Component<IProps> {
    render() {
        return this.props.display && (
            <button
                onClick={this.props.resetGame}
                data-test="new-word-button"
                className="btn btn-primary mb-2"
                type="submit"
            >
                New Word
            </button>
        )
    }
}

export default NewWordButton;
