const {mongoose} = require('./../db/mongoose');

const WordSchema = new mongoose.Schema({
  term: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  definition: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
});

const Word = mongoose.model('Word', WordSchema);

module.exports = {Word};
