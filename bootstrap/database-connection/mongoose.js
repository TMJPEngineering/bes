/* global logger, config, LOGGER_TYPE */

import bluebird from 'bluebird';
import sharedSchema from '~/modules/Shared/Models/SharedSchema';

export const mongoose = (connection) => {
    const Mongoose = connection.driver;
    const database = Mongoose.connection;
    const credentials = connection.password
        ? connection.username + ':' + connection.password
        : connection.username;
    const uri = config.app.uri
        ? config.app.uri
        : connection.host + '://' + credentials + '/' + connection.database;

    database.on('error', error => logger(error, LOGGER_TYPE.DANGER));
    database.once('open', () => {
        logger('Connected to database')
    });

    Mongoose.Promise = bluebird;
    Mongoose.connect(uri, {
        useMongoClient: true
    });
    // Added updated_at and created_at in every collection
    Mongoose.plugin(sharedSchema);
    // Add global methods for Mongoose here
};
