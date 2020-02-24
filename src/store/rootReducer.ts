import { combineReducers } from 'redux';
import success from './success/reducer';
import guessedWords from './guessedWords/reducer';


export default combineReducers({
    success,
    guessedWords,
});
