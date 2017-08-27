const keystone = require('keystone');
const Types = keystone.Field.Types;

const Post = new keystone.List('Post', {
    map: { name: 'title' },
    autokey: { path: 'slug', from: 'title', unique: true }
});

Post.add({
    title: {
        type: String,
        required: true,
        initial: true
    },
    author: {
        type: Types.Relationship,
        ref: 'Author',
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

Post.defaultColumns = 'title|20%, author, updatedAt, createdAt';

Post.schema.pre('save', function(next){

    if(!this.createdAt)
        this.createdAt = Date.now();

    this.updatedAt = Date.now();

    next();
});

Post.register();