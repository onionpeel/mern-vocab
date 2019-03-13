import {REGISTER_USER} from './types';
import axios from 'axios';

export const registerNewUser = newUser => async dispatch => {
  try {
    const result = await axios.post('/api/user/register/', newUser);
    const username = result.data;

    dispatch({
      type: REGISTER_USER,
      payload: username
    });

    
  } catch (e) {
      console.log(e);
  }
};
