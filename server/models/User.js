const {mongoose} = require('./../db/mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  // email: {
  //   type: String,
  //   trim: true,
  //   // required: true,
  //   minlength: 1,
  //   unique: true
  // },
  username: {
    type: String,
    // required: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    // required: true,
    minlength: 6
  }
});

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', UserSchema);

module.exports = {User};
