import {} from './types';
import axios from 'axios';
import uuidv4 from 'uuid/v4';


export const getWordFromAPI = async (word) => dispatch => {
  try{
    const result = await axios.get(`/api/words/dictionary/${word}`);
    const term = result.data

    const newTerm = term.map(vocabObject => {
      const id = uuidv4();
      vocabObject.id = id;
      vocabObject.selected = false;
      return vocabObject;
    });

    await dispatch({
      type: GET_DEFINITION,
      payload: newTerm
    })
  }catch(e) {
    console.log(e);
  };
};

export const selectWord = async (id) => {
  try {
    const vocabulary = this.state.vocabList;
    const vocabArray = vocabulary.map(vocabObject => {
      if (vocabObject.id === id) {
        vocabObject.selected = "Added!";
      }
      return vocabObject;
    });

    await dispatch({
      type: SELECT_VOCAB_WORD,
      payload: vocabArray
    });

    const vocabularyWord = vocabulary.find(vocabObject => {
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
