import {GET_DEFINITION} from './../actions/types';

const initialState = {
  vocabList: []
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
    default:
      return state;
  }
};

export default vocabReducer;
