const mongoose = require('mongoose');

const LocaleType = require('./extensions/i18n/localeType');

const partnerSchema = new mongoose.Schema({
    title: { type: LocaleType },
    link: { type: String },
    photo: {
        public_id: String,
        version: Number,
        signature: String,
        width: Number,
        height: Number,
        format: String,
        resource_type: String,
        url: String,
        secure_url: String
    },
    updatedAt: { type: Date },
    createdAt: { type: Date }
});

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;