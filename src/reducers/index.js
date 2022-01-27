// == Import : npm
import { combineReducers } from 'redux';

// == Import : local
import quizzMovie from './quizz';

const rootReducer = combineReducers({
  quizz: quizzMovie,
});

// == Export
export default rootReducer;
