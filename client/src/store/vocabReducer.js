import {GET_DEFINITION, SELECT_VOCAB_WORD, SET_WORD_VALUE} from './../actions/types';

const initialState = {
  vocabList: [],
  word: ''
};

const vocabReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DEFINITION:
      return {
        ...state,
        vocabList: action.payload
      };
    case SELECT_VOCAB_WORD:
      return {
        ...state,
        vocabList: action.payload
      };
    case SET_WORD_VALUE:
      return {
        ...state,
        word: action.payload
      }
    default:
      return state;
  }
};

export default vocabReducer;
