const mongoose = require('mongoose');

const LocaleType = require('./extensions/i18n/localeType');

let testSchema = new mongoose.Schema({
    title: {
        type: LocaleType
    },
    text: {
        type: LocaleType
    }
});

let Test = mongoose.model('Test', testSchema);

module.exports = Test;