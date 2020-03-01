import React, { Component, MouseEvent } from 'react';

import { IProps, IState } from './types';


class UserEnterForm extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            userSecretWord: '',
        }
    }

    handleSubmit = (e: MouseEvent) => {
        e.preventDefault();
        this.state.userSecretWord.length === 5 && this.props.setUserSecretWord(this.state.userSecretWord);
    };

    render() {
        return (
            <form data-test="user-enter-form" className="form-inline">
                <p>Enter a secret word for someone else to guess!</p>
                <input
                    data-test="input-box"
                    className="mb-2 mr-sm-3"
                    type="text"
                    value={this.state.userSecretWord}
                    placeholder="enter guess"
                    onChange={e => this.setState({ userSecretWord: e.target.value })}
                />
                <button
                    onClick={this.handleSubmit}
                    data-test="submit-button"
                    className="btn btn-primary mb-2"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        );
    }
}

export default UserEnterForm;
