const mongoose = require('mongoose');

const LocaleType = require('./extensions/i18n/localeType');

let projectSchema = new mongoose.Schema({
    title: { type: LocaleType },
    slug: { type: String },
    release: { type: LocaleType },
    description: { type: LocaleType },
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
    order: { type: Boolean },
    updatedAt: { type: Date },
    createdAt: { type: Date }
});

let Project = mongoose.model('Project', projectSchema);

module.exports = Project;