const keystone = require('keystone');
const Types = keystone.Field.Types;

const Home = new keystone.List('Home', {
    map: { name: 'title.en' },
    singular: 'Home',
    plural: 'Home',
    //nocreate: true,
    //nodelete: true
});

Home.add({
    upperTitle: {
        en: { type: String, required: true, initial: true }
    },
    title: {
        en: { type: String, required: true, initial: true }
    },
    text: {
        en: { type: Types.Textarea, required: true, initial: true }
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

Home.defaultColumns = 'title.en|20%, updatedAt, createdAt';

Home.schema.pre('save', function(next){
    if(!this.createdAt)
        this.createdAt = Date.now();

    this.updatedAt = Date.now();

    next();
});

Home.register();

module.exports = Home;