import {combineReducers} from 'redux';
import vocabReducer from './vocabReducer';
import vocabularyReducer from './vocabularyReducer';

export default combineReducers({
  vocab: vocabReducer,
  vocabularyStudyList: vocabularyReducer
});
