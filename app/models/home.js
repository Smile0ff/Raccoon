const mongoose = require('mongoose');

const LocaleType = require('./extensions/i18n/localeType');

const homeSchema = new mongoose.Schema({
    upperTitle: { type: LocaleType },
    title: { type: LocaleType },
    text: { type: LocaleType },
    updatedAt: { type: Date },
    createdAt: { type: Date }
});

homeSchema.statics.findLastUpdated = function(cb){
    return this.findOne().sort({ updatedAt: -1 });
};

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;