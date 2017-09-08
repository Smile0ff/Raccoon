// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config({
	path: '../.env/.env.production'
});

// Require keystone
var keystone = require('keystone');

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({
	'name': 'Raccoon',
	'brand': 'Raccoon',

	'less': 'public',
	'static': 'public',
	'favicon': 'public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'pug',

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User',

	'wysiwyg override toolbar': false,
	'wysiwyg menubar': false,

	'port': process.env.KEYSTONE_PORT,
	'mongo': process.env.MONGO_URI
});

keystone.set('cloudinary config', {
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET
});

// Load your project's Models
keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js
keystone.set('locals', {
	_: require('lodash'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable,
});

// Load your project's Routes
keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI
keystone.set('nav', {
	intro: ['homes', 'abouts'],
	projects: 'projects',
	staff: 'staffs',
	community: ['media', 'partners'],
	messages: ['feedbacks', 'orders'],
	meta: 'meta',
	users: 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();
