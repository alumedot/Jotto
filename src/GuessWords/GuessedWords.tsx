import React from 'react';
import PropTypes from 'prop-types';
import { IProps } from './types';


const GuessedWords = (props: IProps) => {
    let contents;
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test="guess-instructions">
                Try to guess the secret word!
            </span>
        );
    } else {
        const guessedWordsRows = props.guessedWords.map((word, i) => (
            <tr data-test="guessed-word" key={i}>
                <td>{i + 1}</td>
                <td>{word.guessedWord}</td>
                <td>{word.letterMatchCount}</td>
            </tr>
        ));

        contents = (
            <div data-test="guessed-words">
                <h3>Guessed Words</h3>
                <table className="table table-sm">
                    <thead className="thead-light">
                        <tr>
                            <th>
                                #
                            </th>
                            <th>
                                Guess
                            </th>
                            <th>
                                Matching Letters
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        { guessedWordsRows }
                    </tbody>
                </table>
                <div data-test="total-guesses">
                    Total guesses: {guessedWordsRows.length}
                </div>
            </div>
        );
    }

    return (
        <div data-test="component-guessed-words">
            { contents }
        </div>
    )
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired,
};

export default GuessedWords;
