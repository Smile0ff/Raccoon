const mongoose = require('mongoose');

const LocaleType = require('./extensions/i18n/localeType');

const staffSchema = new mongoose.Schema({
    name: { type: LocaleType },
    position: { type: LocaleType },
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

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;