const {mongoose} = require('./../db/mongoose');

const WordSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  reading: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  english: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

const Word = mongoose.model('Word', WordSchema);

module.exports = {Word};
