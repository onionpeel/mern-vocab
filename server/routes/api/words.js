const express = require('express');
const router = express.Router();
const axios = require('axios');

const {Word} = require('./../../models/Word');

router.get(`/dictionary/:word`, async (req, res) => {
  try{
    const word = req.params.word;
    const url = `https://jisho.org/api/v1/search/words?keyword=${word}`;
    const translation = await axios.get(url);
    const sample = translation.data.data;

    const tenItems = sample.slice(0, 10);
    res.send(tenItems);
  } catch(e) {
    console.log(e)
  }
});

//Add a word
router.post('/', async (req, res) => {
  try{
    const word = new Word({
      word: req.body.word,
      reading: req.body.reading,
      english: req.body.english
    });

    let newWord = await word.save();
    res.send(newWord);
  } catch(e) {
    res.status(400).send();
  };
});

// Retrieve all words
router.get('/', async (req, res) => {
  try {
    let words = await Word.find({});
    res.send(words);

  } catch(e) {
    res.status(400).send();
  };
});

//Retrieve one word by its id
router.get('/:id', async (req, res) => {
  try {
    const word = await Word.findOne({_id: req.params.id});
    if (word === undefined) {
      throw new Error;
    } else {
      res.send(word);
    };
  } catch(e) {
    res.sendStatus(404);
  };
});

//Delete one word by its id
router.delete('/:id', async (req, res) => {
  try {
    const deletedWord = await Word.findOneAndDelete({_id: req.params.id});
    if (deletedWord === undefined) {
      throw new Error;
    } else {
      res.send(deletedWord);
    };
  } catch(e) {
    res.sendStatus(404);
    console.log("NOT FOUND!")
  };
});

router.patch('/:id', async (req, res) => {
  try {
    const body = req.body;
    const updatedWord = await Word.findByIdAndUpdate({_id: req.params.id}, {$set: body}, {new: true});
    if (!updatedWord) {
      return res.status(404).send();
    };
    res.send(updatedWord);
  } catch(e) {
    res.status(400).send();
  };
});

module.exports = router;
