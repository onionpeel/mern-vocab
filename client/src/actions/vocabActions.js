import {SET_DEFINITION, SELECT_VOCAB_WORD, SET_WORD_VALUE} from './types';
import axios from 'axios';
import uuidv4 from 'uuid/v4';


export const setWordValue = word => dispatch => {
  try{
    dispatch({
      type: SET_WORD_VALUE,
      payload: word
    })
  }catch (e) {
    console.log(e);
  };
};

export const getWordFromAPI = (word) => async dispatch => {
  try{
    const result = await axios.get(`/api/words/dictionary/${word}`);
    const term = result.data

    const newTerm = term.map(vocabObject => {
      const id = uuidv4();
      vocabObject.id = id;
      vocabObject.selected = false;
      return vocabObject;
    });

    dispatch({
      type: SET_DEFINITION,
      payload: newTerm
    })
  }catch(e) {
    console.log(e);
  };
};

export const selectWord = (id, vocabList) => async dispatch => {
  try {
    const vocabArray = vocabList.map(vocabObject => {
      if (vocabObject.id === id) {
        vocabObject.selected = "Added!";
      }
      return vocabObject;
    });

    await dispatch({
      type: SELECT_VOCAB_WORD,
      payload: vocabArray
    });

    const vocabularyWord = vocabList.find(vocabObject => {
      return vocabObject.id === id;
    })

    const word = vocabularyWord.japanese[0].word;
    const reading = vocabularyWord.japanese[0].reading;
    const english = vocabularyWord.senses[0].english_definitions[0];

    await axios.post('/api/words/', {
      word,
      reading,
      english
    });
  }catch (e) {
    console.log(e);
  };
};
