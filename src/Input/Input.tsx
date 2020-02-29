import React, { Component, MouseEvent } from 'react';
import { connect } from 'react-redux';

import { guessWord } from 'store/guessedWords/actions';
import { getSecretWord } from 'store/secretWord/actions';
import { resetGame } from '../store/common/actions';
import { giveUp } from '../store/status/actions';

import { IRootReduxState } from '../store/types';

import { IProps, IReduxInjectedDispatch, IReduxInjectedState, IState } from './types';
import { Status } from '../constants';


export class InputUnconnected extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            currentGuess: '',
            isGiveUp: false,
        }
    }

    submitGuessedWord = (e: MouseEvent) => {
        e.preventDefault();
        const { currentGuess } = this.state;

        if (currentGuess && currentGuess.length === 5) {
            this.props.guessWord(currentGuess);
            this.setState({ currentGuess: '' });
        }
    };

    render() {
        return (
            <div data-test="component-input">
                {
                    this.props.status === Status.Victory || this.props.status === Status.GiveUp ? null : (
                        <form className="form-inline">
                            <input
                                data-test="input-box"
                                className="mb-2 mr-sm-3"
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
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    this.props.giveUp();
                                }}
                                data-test="giveUp-button"
                                className="btn btn-danger mb-2 ml-2"
                            >
                                Give Up
                            </button>
                        </form>
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = ({ status }: IRootReduxState) => {
    return { status };
};

export default connect<
    IReduxInjectedState, IReduxInjectedDispatch, {}, IRootReduxState
>(mapStateToProps, { guessWord, getSecretWord, resetGame, giveUp })(InputUnconnected);
