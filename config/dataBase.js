const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
const URI = `mongodb://localhost:${process.env.DATABASEPORT}/${process.env.DATABASENAME}`;
mongoose.Promise = global.Promise;
mongoose.connect(URI, {
        useNewUrlParser: true
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;