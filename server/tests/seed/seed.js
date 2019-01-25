const {Word} = require('./../../models/Word');
const {ObjectID} = require('mongodb');

//This is the data used to seed the test database
const words = [
  {
    term: '熊',
    definition: 'bear',
    _id: new ObjectID()
  },
  {
    term: '頭',
    definition: 'head',
    _id: new ObjectID()
  }
];

//This will populate the Word collection so it only contains data from the
//words array from above.
const populateWords = async () => {
  try {
    await Word.deleteMany({});

    const wordOne = new Word(words[0]).save();
    const wordTwo = new Word(words[1]).save();

    await Promise.all([wordOne, wordTwo]);
  } catch (e) {
    console.log(e);
  };
};

module.exports = {words, populateWords};
