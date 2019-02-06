import {combineReducers} from 'redux';
import vocabReducer from './vocabReducer';

export default combineReducers({
  vocab: vocabReducer,
  vocabularyStudyList: vocabularyReducer
});
