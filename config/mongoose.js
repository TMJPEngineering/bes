/* global logger, env, LOGGER_TYPE */

import mongoose from 'mongoose';
import bluebird from 'bluebird';
import sharedSchema from '~/modules/Shared/Schemas/shared.schema';

export default () => {
    let uri = 'mongodb://localhost/' + env.MONGO_DATABASE;
    if (env.NODE_ENV == 'production') {
        uri = env.MONGODB_URI;
    }
    const database = mongoose.connection;
    database.on('error', error => logger(error, LOGGER_TYPE.DANGER));
    database.once('open', () => {
        logger('Connected to database');
    });
    mongoose.Promise = bluebird;
    mongoose.connect(uri, {
        useMongoClient: true
    });
    // Added updated_at and created_at in every collection
    mongoose.plugin(sharedSchema);
    // Add global methods for mongoose here
};
