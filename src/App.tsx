import React, { Component } from 'react';

// Components
import GuessedWords from './GuessWords';
import Congrats from './Congrats';

import './App.css';


class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Jotto</h1>
                <Congrats success={false} />
                <GuessedWords guessedWords={[
                    { guessedWord: 'train', letterMatchCount: 3 },
                    { guessedWord: 'train', letterMatchCount: 3 },
                    { guessedWord: 'train', letterMatchCount: 3 },
                ]} />
            </div>
        );
    }
}

export default App;
