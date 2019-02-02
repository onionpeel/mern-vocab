const mongoose = require('mongoose');

// establish the connection with the database

// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

mongoose.connect("mongodb://testing1:testing2@ds259620.mlab.com:59620/mernvocabdb", { useNewUrlParser: true });


module.exports = {mongoose};
