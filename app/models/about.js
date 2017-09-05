const mongoose = require('mongoose');

const LocaleType = require('./extensions/i18n/localeType');

const aboutSchema = new mongoose.Schema({
    upperTitle: { type: LocaleType },
    title: { type: LocaleType },
    text: { type: LocaleType },
    author: { type: LocaleType },
    updatedAt: { type: Date },
    createdAt: { type: Date }
});

aboutSchema.statics.findLastUpdated = function(cb){
    return this.findOne().sort({ updatedAt: -1 });
};

const About = mongoose.model('About', aboutSchema);

module.exports = About;