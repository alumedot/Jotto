import { combineReducers } from 'redux';
import status from './status/reducer';
import guessedWords from './guessedWords/reducer';
import secretWord from './secretWord/reducer';


export default combineReducers({
    status,
    guessedWords,
    secretWord,

});
