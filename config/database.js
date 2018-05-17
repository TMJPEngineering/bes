/* global env */

import Mongoose from 'mongoose';

export default {
    /**
     * Database Default Connection
     */
    default: env.DB_CONNECTION || '',

    /**
     * Database Connections
     */
    connections: {
        mongoose: {
            driver: Mongoose,
            schema: Mongoose.Schema,
            connection_format: 'mongodb://',
            username: env.DB_USERNAME || '',
            password: env.DB_PASSWORD || '',
            host: env.DB_HOST || 'localhost',
            port: env.DB_PORT || '27017',
            database: env.DB_DATABASE || 'bes',
            options: env.DB_OPTIONS || '',
            prefix: env.DB_PREFIX || ''
        }
        // mysql: {
        // driver: '',
        // database: env.DB_DATABASE || 'bes',
        // schema: '',
        // model: '',
        // host: env.DB_HOST || 'mongodb',
        // username: env.DB_USERNAME || 'localhost',
        // password: env.DB_PASSWORD || '',
        // prefix: '',
        // uri: ''
        // }
    }
};
