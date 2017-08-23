const mongoose = require('mongoose');

const connectionString = process.env.MONGO_URI;

mongoose.Promise = global.Promise;

module.exports = (app) => {

    mongoose.connect(connectionString, {
        useMongoClient: true
    });

    mongoose.connection.on('error', (err) => console.error(err));

    mongoose.connection.on('disconnected', () => console.log('disconnected'));

    app.context.db = mongoose.connection;

    process.on('SIGINT', () => {

        mongoose.connection.close(() => {
            console.error('connection closed through app termination');
            process.exit(0);
        });
        
    });

    return mongoose.connection;

}