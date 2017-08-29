const keystone = require('keystone');
const Types = keystone.Field.Types;

const Staff = new keystone.List('Staff', {
    map: { name: 'name.en' },
    singular: 'Staff',
    plural: 'Staff',
    defaultSort: '-updatedAt'
});

const uploadsDir = 'uploads/staff';

Staff.add({
    name: {
        en: { type: String, required: true, initial: true }
    },
    position: {
        en: { type: String, required: true, initial: true }
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

Staff.defaultColumns = 'name.en, position.en, updatedAt, createdAt';

Staff.schema.pre('save', function(next){
    if(!this.createdAt)
        this.createdAt = Date.now();

    this.updatedAt = Date.now();

    next();
});

Staff.register();

module.exports = Staff;