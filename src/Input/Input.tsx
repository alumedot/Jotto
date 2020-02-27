import React, { MouseEvent, Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from 'store/guessedWords/actions';

import { IRootReduxState } from '../store/types';

import { IProps, IState, IReduxInjectedState, IReduxInjectedDispatch } from './types';


export class InputUnconnected extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = { currentGuess: '' }
    }

    submitGuessedWord = (e: MouseEvent) => {
        e.preventDefault();
        const { currentGuess } = this.state;

        currentGuess && currentGuess.length && this.props.guessWord(currentGuess);
    };

    render() {
        return (
            <div data-test="component-input">
                {
                    this.props.success ? null : (
                        <form className="form-inline">
                            <input
                                data-test="input-box"
                                className="mb-2 mx-sm-3"
                                type="text"
                                value={this.state.currentGuess}
                                placeholder="enter guess"
                                onChange={e => this.setState({ currentGuess: e.target.value })}
                            />
                            <button
                                onClick={this.submitGuessedWord}
                                data-test="submit-button"
                                className="btn btn-primary mb-2"
                                type="submit"
                            >
                                Submit
                            </button>
                        </form>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = ({success}: IRootReduxState) => {
    return {success};
};

export default connect<
    IReduxInjectedState, IReduxInjectedDispatch, {}, IRootReduxState
>(mapStateToProps, { guessWord })(InputUnconnected);
