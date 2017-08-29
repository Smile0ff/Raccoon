const mongoose = require('mongoose');

const LocaleType = require('./extensions/i18n/localeType');

const mediaSchema = new mongoose.Schema({
    title: { type: LocaleType },
    link: { type: String },
    photo: {
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
    updatedAt: { type: Date },
    createdAt: { type: Date } 
});

const Media = mongoose.model('Media', mediaSchema);

module.exports = Media;