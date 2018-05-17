/* global logger, config */

import bluebird from 'bluebird';
import sharedSchema from '~/modules/Shared/Models/SharedSchema';

export const mongoose = (connection, seeders = false) => {
    const Mongoose = connection.driver;
    const databaseConnection = Mongoose.connection;

    let credentials = '';

    if (connection.username || connection.password) {
        credentials = connection.password ?
            `${connection.username}:${connection.password}@` :
            `${connection.username}@`;
    }

    const single_host = connection.host + ':' + connection.port;
    const database = `/${connection.database}`;
    const uri_format = connection.connection_format + credentials + single_host + database + connection.options;

    databaseConnection.on('error', error => logger.error(error));
    databaseConnection.once('open', () => {
        console.log('Connected to database');
        if (seeders && config.app.env !== 'production') {
            // Drop database
            Mongoose.connection.db.dropDatabase();

            // Run seeder
            seeders();
        }
    });

    Mongoose.Promise = bluebird;
    Mongoose.connect(uri_format, {
        useMongoClient: true
    });
    // Added updated_at and created_at in every collection
    Mongoose.plugin(sharedSchema);
    // Add global methods for Mongoose here
};
