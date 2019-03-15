const express = require('express');
const router = express.Router();
const {User} = require('./../../models/User');

router.post('/register', async function(req, res, next) {
  console.log('registering user');

  await User.register(new User({username: req.body.name, email: req.body.email}), req.body.password, function(err) {
    if (err) {
      console.log('error while user register!', err);
      return next(err);
    }

    console.log('user registered!');
    const result = req.body.name;
    res.send(result);
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.send();
});

module.exports = router;
