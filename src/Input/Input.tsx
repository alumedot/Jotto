import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IRootReduxState } from '../store/types';

import { IProps, IReduxInjectedState } from './types';


export class Input extends Component<IProps> {
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
                                placeholder="enter guess"
                            />
                            <button
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

export default connect<IReduxInjectedState, {}, {}, IRootReduxState>(mapStateToProps)(Input);
