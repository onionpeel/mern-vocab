import {GET_STUDY_LIST, DELETE_WORD} from './types';
import axios from 'axios';

export const getStudyList = () => async dispatch => {
  try{
    const res =  await axios.get('/api/words/');

    dispatch({
      type: GET_STUDY_LIST,
      payload: res.data
    })
  }catch(e) {
    console.log(e);
  };
};

export const deleteWord = (id, vocabulary) => async dispatch => {
  try {
    await axios.delete(`/api/words/${id}`);
    const newVocab = vocabulary.filter(item => {
      return item._id !== id;
    });

    dispatch({
      type: DELETE_WORD,
      payload: newVocab
    });

  } catch(e) {
    console.log(e)
  };
};
