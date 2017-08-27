const keystone = require('keystone');
const Types = keystone.Field.Types;

const Author = new keystone.List('Author', {
    map: { name: 'name' },
    autokey: { path: 'slug', from: 'name', unique: true }
});

Author.add({
    name: {
        type: String,
        required: true,
        initial: true
    },
    updatedAt: {
        type: Types.Date,
        hidden: true
    },
    createdAt: {
        type: Types.Date,
        hidden: true
    }
});

Author.relationship({
    path: 'posts',
    ref: 'Post',
    refPath: 'author'
});

Author.defaultColumns = 'name|20%, updatedAt, createdAt';

Author.schema.pre('save', function(next){

    if(!this.createdAt)
        this.createdAt = Date.now();

    this.updatedAt = Date.now();

    next();
});

Author.register();