const keystone = require('keystone');
const Types = keystone.Field.Types;

const routes = require('../../app/config/website/routes');

const Meta = new keystone.List('Meta', {
    map: { name: 'route' },
    singular: 'Meta',
    plural: 'Meta',
    defaultSort: 'id',
    //nocreate: true,
    //nodelete: true
});

const uploadsDir = 'uploads/meta';

Meta.add({
    route: {
        type: Types.Select,
        options: routes.map((route) => route.key)
    },
    title: {
        en: { type: String }
    },
    keywords: {
        en: { type: String }
    },
    description: {
        en: { type: Types.Textarea, height: 100 }
    },
    image: {
        type: Types.CloudinaryImage,
        whenExists: 'overwrite',
        folder: uploadsDir,
        autoCleanup: true,
        select : true
    },
    robots: { type: String }
});

Meta.defaultColumns = 'route, title';

Meta.register();

module.exports = Meta;