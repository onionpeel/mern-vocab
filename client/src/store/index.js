import {combineReducers} from 'redux';
import vocabReducer from './vocabReducer';
import vocabularyReducer from './vocabularyReducer';
import registrationReducer from './registrationReducer';

export default combineReducers({
  vocab: vocabReducer,
  vocabularyStudyList: vocabularyReducer,
  registeredUsername: registrationReducer
});
