const keystone = require('keystone');
const Types = keystone.Field.Types;

const About = new keystone.List('About', {
    map: { name: 'title.en' },
    singular: 'About',
    plural: 'About',
    //nocreate: true,
    //nodelete: true
});

About.add({
    upperTitle: {
        en: { type: String, required: true, initial: true }
    },
    title: {
        en: { type: String, required: true, initial: true }
    },
    text: {
        en: { type: Types.Textarea, required: true, initial: true }
    },
    author: {
        en: { type: String, required: true, initial: true }
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

About.defaultColumns = 'title.en|20%, updatedAt, createdAt';

About.schema.pre('save', function(next){
    if(!this.createdAt)
        this.createdAt = Date.now();

    this.updatedAt = Date.now();

    next();
});

About.register();

module.exports = About;