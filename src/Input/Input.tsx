import React, { Component } from 'react';
import { connect } from 'react-redux';

import { guessWord } from 'store/guessedWords/actions';

import { IRootReduxState } from '../store/types';

import { IProps, IState, IReduxInjectedState, IReduxInjectedDispatch } from './types';


export class InputUnconnected extends Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            value: '',
        }
    }

    render() {
        return (
            <div data-test="component-input">
                {
                    this.props.success ? null : (
                        <form onSubmit={(event) => event.preventDefault()} className="form-inline">
                            <input
                                data-test="input-box"
                                className="mb-2 mx-sm-3"
                                type="text"
                                placeholder="enter guess"
                                onChange={e => this.setState({ value: e.target.value })}
                            />
                            <button
                                onClick={() => this.props.guessWord(this.state.value)}
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
