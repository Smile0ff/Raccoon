const keystone = require('keystone');
const Types = keystone.Field.Types;

const Order = new keystone.List('Order', {
    map: { name: 'name' },
    singular: 'Order',
    plural: 'Orders',
    defaultSort: '-createdAt',
    nocreate: true,
    noedit: true
});

Order.add({
    name: { type: String },
    email: { type: String },
    amount: { type: Number },
    message: { type: Types.Textarea },
    createdAt: { type: Date }
});

Order.defaultColumns = 'name, email, amount, createdAt';

Order.register();

module.exports = Order;