/* global env */

import Mongoose from 'mongoose';

export default {
    /**
     * Database Default Connection
     */
    default: env.DB_CONNECTION || 'mongoose',

    /**
     * Database Connections
     */
    connections: {
        mongoose: {
            driver: Mongoose,
            database: env.DB_DATABASE || 'bes',
            schema: Mongoose.Schema,
            host: env.DB_HOST || 'mongodb',
            username: env.DB_USERNAME || 'localhost',
            password: env.DB_PASSWORD || '',
            prefix: '',
            uri: ''
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
