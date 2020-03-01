import React, { Component } from 'react';

import { IProps } from './types';


class EnterWordButton extends Component<IProps> {
    render() {
        return this.props.display && (
            <div style={{ height: '200px' }} className="mt-2 d-flex align-items-end">
                <button
                    onClick={this.props.setEntering}
                    data-test="user-word-button"
                    className="btn btn-primary mb-2 mt-4"
                    type="submit"
                >
                    Enter your own secret word
                </button>
            </div>
        )
    }
}

export default EnterWordButton;
