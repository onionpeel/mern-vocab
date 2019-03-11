import {REGISTER_USER} from './../actions/types';

const initialState = {
  username: ''
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        username: action.payload
      }
    default:
      return state;
  }
};

export default registrationReducer;
