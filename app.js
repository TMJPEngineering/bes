import express, { static as expressStatic } from 'express';

import processHandler from './bootstrap/process-handler';
import compress from './bootstrap/compress';
import bodyParser from './bootstrap/body-parser';
import coreMiddleware from './bootstrap/core-middleware';
import csrf from './bootstrap/csrf';
import handler from './bootstrap/handler';
import mongoose from './bootstrap/mongoose';
import databaseSeeder from './bootstrap/database-seeder';
import routes from './bootstrap/routes';
import passport from './bootstrap/passport';
import './bootstrap/helpers';

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

    // This library uses request.body for requests like POST method, etc.
    bodyParser(app);
    // This library uses for security purposes like session, crsf, passport, and helmet.
    coreMiddleware(app);
    // Set csrf token in cookie
    csrf(app);
    // Centralized error handler
    handler(app);
    // Database configuration
    mongoose();
    // Database Seeder
    databaseSeeder();
    // Set of routes in an application
    routes(app);
    // Passport configuration
    passport();

    return app;
};
