/* global logger, env, LOGGER_TYPE, Mongoose */

import bluebird from 'bluebird';
import sharedSchema from '~/modules/Shared/Models/SharedSchema';

export default () => {
    let uri = 'mongodb://localhost/' + env.MONGO_DATABASE;
    if (env.NODE_ENV == 'production') {
        uri = env.MONGODB_URI;
    }
    const database = Mongoose.connection;
    database.on('error', error => logger(error, LOGGER_TYPE.DANGER));
    database.once('open', () => {
        logger('Connected to database');
    });
    Mongoose.Promise = bluebird;
    Mongoose.connect(uri, {
        useMongoClient: true
    });
    // Added updated_at and created_at in every collection
    Mongoose.plugin(sharedSchema);
    // Add global methods for Mongoose here
};
