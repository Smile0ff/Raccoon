const keystone = require('keystone');
const Types = keystone.Field.Types;

const Project = new keystone.List('Project', {
    map: { name: 'slug' },
    autokey: { path: 'slug', from: 'title.en', unique: true },
    singular: 'Project',
    plural: 'Projects',
    defaultSort: '-createdAt'
});

const uploadsDir = 'uploads/projects';

Project.add({
    title: {
        en: { type: String, required: true, initial: true }
    },
    slug: {
        type: String,
        readonly: true,
        initial: false
    },
    release: {
        en: { type: String }
    },
    description: {
        en: {
            type: Types.Html,
            wysiwyg: true,
            height: 200
        }
    },
    photo: {
        type: Types.CloudinaryImage,
        whenExists: 'overwrite',
        folder: uploadsDir,
        autoCleanup: true,
        required: true,
        initial: true
    },
    order: {
        type: Boolean,
        default: false
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

Project.defaultColumns = 'title.en, slug, release, updatedAt, createdAt';

Project.schema.pre('save', function(next){
    if(!this.createdAt)
        this.createdAt = Date.now();

    this.updatedAt = Date.now();

    next();
});

Project.register();

module.exports = Project;