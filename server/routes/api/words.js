const express = require('express');
const router = express.Router();

const {Word} = require('./../../models/Word');

//Add a word
router.post('/', async (req, res) => {
  try{
    const word = new Word({
      term: req.body.term,
      definition: req.body.definition
    });

    let newWord = await word.save();
    res.send(newWord);
  } catch(e) {
    res.status(400).send();
  };
});

//Retrieve all words
router.get('/', async (req, res) => {
  try {
    let words = await Word.find({});
    res.send(words);
    // res.send({
    //   data: products.map(item => {
    //     return {_id: item._id, name: item.name}
    //   })
    // });
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
