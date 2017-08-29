const keystone = require('keystone');
const Types = keystone.Field.Types;

const Media = new keystone.List('Media', {
    map: { name: 'title.en' },
    singular: 'Media',
    plural: 'Media',
    defaultSort: '-updatedAt'
});

const uploadsDir = 'uploads/media';

Media.add({
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

Media.defaultColumns = 'title.en, updatedAt, createdAt';

Media.schema.pre('save', function(next){
    if(!this.createdAt)
        this.createdAt = Date.now();

    this.updatedAt = Date.now();

    next();
});

Media.register();

module.exports = Media;