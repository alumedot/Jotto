import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IRootReduxState } from '../store/types';
import { getSecretWord } from '../store/secretWord/actions';

// Components
import GuessedWords from '../GuessWords';
import Input from '../Input';
import Congrats from '../Congrats';

import './App.css';

import { IProps, IReduxInjectedState, IReduxInjectedDispatch } from './types';


export class AppUnconnected extends Component<IProps> {
    componentDidMount() {
        this.props.getSecretWord();
    }

    render() {
        return (
            <div className="container">
                <h1>Jotto</h1>
                <Congrats success={this.props.success} />
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords} />
            </div>
        );
    }
}

const mapStateToProps = ({secretWord, success, guessedWords}: IRootReduxState) => ({
    secretWord,
    guessedWords,
    success,
});

export default connect<
    IReduxInjectedState, IReduxInjectedDispatch, {}, IRootReduxState
>(mapStateToProps, { getSecretWord })(AppUnconnected);
