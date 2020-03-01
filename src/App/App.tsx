import React, { Component } from 'react';
import { connect } from 'react-redux';

import { IRootReduxState } from 'store/types';
import { getSecretWord } from 'store/secretWord/actions';
import { resetGame } from 'store/common/actions';
// Components
import GuessedWords from '../GuessWords';
import Input from '../Input';
import Congrats from '../Congrats';
import NewWordButton from '../NewWordButton';
import GiveUpMessage from '../GiveUpMessage';
import UserEnterForm from '../UserEnterForm';

import { Status } from '../constants';
import { UserEnterStatus } from '../store/userEnter/types/redux';

import './App.css';
import { IProps, IReduxInjectedDispatch, IReduxInjectedState } from './types';


export class AppUnconnected extends Component<IProps> {
    componentDidMount() {
        this.props.getSecretWord();
    }

    render() {
        let contents: JSX.Element;

        if (this.props.userEnter === UserEnterStatus.InProgress) {
            contents = (
                <UserEnterForm setUserSecretWord={() => {}} />
            )
        } else {
            contents = (
                <>
                    <div>{this.props.secretWord}</div>
                    <Congrats status={this.props.status}/>
                    <GiveUpMessage
                        display={this.props.status === Status.GiveUp}
                        secretWord={this.props.secretWord}
                    />
                    <NewWordButton
                        display={this.props.status === Status.Victory || this.props.status === Status.GiveUp}
                        resetGame={this.props.resetGame}
                    />
                    <Input/>
                    <GuessedWords guessedWords={this.props.guessedWords}/>
                </>
            )
        }

        return (
            <div className="container">
                <h1>Jotto</h1>
                { contents }
            </div>
        );
    }
}

const mapStateToProps = ({
     secretWord,
     status,
     guessedWords,
     userEnter
}: IRootReduxState) => ({
    secretWord,
    guessedWords,
    status,
    userEnter,
});

export default connect<IReduxInjectedState, IReduxInjectedDispatch, {}, IRootReduxState>(mapStateToProps, {
    getSecretWord,
    resetGame
})(AppUnconnected);
