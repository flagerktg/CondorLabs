const mongoose = require('mongoose');
const {
    Schema
} = mongoose;

const taskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }

});
module.exports = mongoose.model('Task', taskSchema);