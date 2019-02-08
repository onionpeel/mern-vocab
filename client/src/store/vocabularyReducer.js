import {GET_STUDY_LIST, DELETE_WORD} from './../actions/types';

const initialState = {
  vocabulary: []
};

const vocabularyReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDY_LIST:
      return {
        ...state,
        vocabulary: action.payload
      };
    case DELETE_WORD:
      return {
        ...state,
        vocabulary: action.payload
      }
    default:
      return state;
  }
};

export default vocabularyReducer;
