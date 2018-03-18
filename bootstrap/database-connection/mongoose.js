/* global logger */

import bluebird from 'bluebird';
import sharedSchema from '~/modules/Shared/Models/SharedSchema';

export const mongoose = (connection) => {
    const Mongoose = connection.driver;
    const database = Mongoose.connection;
    const credentials = connection.password
        ? connection.username + ':' + connection.password
        : connection.username;
    const uri = connection.uri
        ? connection.uri
        : connection.host + '://' + credentials + '/' + connection.database;

    database.on('error', error => logger.error(error));
    database.once('open', () => {
        console.log('Connected to database')
    });

    Mongoose.Promise = bluebird;
    Mongoose.connect(uri, {
        useMongoClient: true
    });
    // Added updated_at and created_at in every collection
    Mongoose.plugin(sharedSchema);
    // Add global methods for Mongoose here
};
