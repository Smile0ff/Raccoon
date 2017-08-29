const mongoose = require('mongoose');

const LocaleType = require('./extensions/i18n/localeType');

const metaSchema = new mongoose.Schema({
    route: { type: String },
    title: { type: LocaleType },
    keywords: { type: LocaleType },
    description: { type: LocaleType },
    image: {
        public_id: String,
        version: Number,
        signature: String,
        format: String,
        resource_type: String,
        url: String,
        secure_url: String,
        width: Number,
        height: Number
    },
    robots: { type: String }
});

const Meta = mongoose.model('Meta', metaSchema);

module.exports = Meta;