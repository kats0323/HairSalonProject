const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aboutSchema = new Schema({
    introduction: {
        type: String
    },
    image: {
        type: String
    }
});


const About = mongoose.model('About', aboutSchema);

module.exports = About;