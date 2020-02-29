import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IRootReduxState } from 'store/types';
import { getSecretWord } from 'store/secretWord/actions';
import { resetGame } from 'store/common/actions';
// Components
import GuessedWords from '../GuessWords';
import Input from '../Input';
import Congrats from '../Congrats';

import './App.css';

import { IProps, IReduxInjectedDispatch, IReduxInjectedState } from './types';
import NewWordButton from '../NewWordButton';
import { Status } from '../constants';
import GiveUpMessage from '../GiveUpMessage';


export class AppUnconnected extends Component<IProps> {
    componentDidMount() {
        this.props.getSecretWord();
    }

    render() {
        return (
            <div className="container">
                <h1>Jotto</h1>
                <div>{this.props.secretWord}</div>
                <Congrats status={this.props.status} />
                <GiveUpMessage
                    display={this.props.status === Status.GiveUp}
                    secretWord={this.props.secretWord}
                />
                <NewWordButton
                    display={this.props.status === Status.Victory || this.props.status === Status.GiveUp}
                    resetGame={this.props.resetGame}
                />
                <Input />
                <GuessedWords guessedWords={this.props.guessedWords} />
            </div>
        );
    }
}

const mapStateToProps = ({secretWord, status, guessedWords}: IRootReduxState) => ({
    secretWord,
    guessedWords,
    status,
});

export default connect<
    IReduxInjectedState, IReduxInjectedDispatch, {}, IRootReduxState
>(mapStateToProps, { getSecretWord, resetGame })(AppUnconnected);
