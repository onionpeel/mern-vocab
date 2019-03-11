const express = require('express');
const router = express.Router();
const {User} = require('./../../models/User');

router.post('/register', async (req, res) => {
  try {
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    });

    const newUser = await user.save();
    const username = newUser.username;
    res.send(username);
  }catch(e) {
    // res.status(400).send();
    console.log(e)
  };
});


module.exports = router;
