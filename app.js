import express, { static as expressStatic } from 'express';

import './bootstrap/env';
import './bootstrap/helpers';

import routes from './app/Http/routes';

import processHandler from './bootstrap/process-handler';
import compress from './bootstrap/compress';
import coreMiddleware from './bootstrap/core-middleware';
import database from './bootstrap/database';
import databaseSeeder from './bootstrap/database-seeder';
import passport from './bootstrap/passport';

export default () => {
    let app = express();

    processHandler();

    // Gzip Compress for compressing all accessed files
    compress(app);

    // Build JS & CSS
    app.use('/dist', expressStatic(`${__dirname}/public/dist`));
    // Build Fonts
    app.use('/fonts', expressStatic(`${__dirname}/public/fonts`));
    // HTML Files
    app.use('/views', expressStatic(`${__dirname}/resources/views`));

    // This library uses for security purposes like session, crsf, passport, and helmet.
    coreMiddleware(app);
    // Database configuration
    database();
    // Database Seeder
    databaseSeeder();
    // Set of routes in an application
    routes(app);
    // Passport configuration
    passport();
    
    return app;
}
