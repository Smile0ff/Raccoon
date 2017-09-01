const keystone = require('keystone');
const Types = keystone.Field.Types;

const Feedback = new keystone.List('Feedback', {
    map: { name: 'name' },
    singular: 'Feedback',
    plural: 'Feedback',
    defaultSort: '-createdAt',
    nocreate: true,
    noedit: true
});

Feedback.add({
    name: { type: String },
    email: { type: String },
    message: { type: Types.Textarea },
    createdAt: { type: Date }
});

Feedback.defaultColumns = 'name, email, createdAt';

Feedback.register();

module.exports = Feedback;