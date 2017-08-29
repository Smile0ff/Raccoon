const keystone = require('keystone');
const Types = keystone.Field.Types;

const Partner = new keystone.List('Partner', {
    map: { name: 'title.en' },
    singular: 'Partner',
    plural: 'Partners',
    defaultSort: '-updatedAt'
});

const uploadsDir = 'uploads/partners';

Partner.add({
    title: {
        en: { type: String, required: true, initial: true }
    },
    link: {
        type: Types.Url,
        required: true,
        initial: true
    },
    photo: {
        type: Types.CloudinaryImage,
        whenExists: 'overwrite',
        folder: uploadsDir,
        autoCleanup: true
    },
    updatedAt: {
        type: Date,
        hidden: true
    },
    createdAt: {
        type: Date,
        hidden: true
    }
});

Partner.defaultColumns = 'title.en, updatedAt, createdAt';

Partner.schema.pre('save', function(next){
    if(!this.createdAt)
        this.createdAt = Date.now();

    this.updatedAt = Date.now();

    next();
});

Partner.register();

module.exports = Partner;