const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true);
//for security the field .env contains the databases routes
const URI = `mongodb://localhost:${process.env.DATABASEPORT}/${process.env.DATABASENAME}`;
mongoose.Promise = global.Promise;
mongoose.connect(URI, {
        useNewUrlParser: true
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;