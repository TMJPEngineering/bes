import express from 'express';
import processHandler from './config/process-handler';
import compress from './config/compress';
import bodyParser from './config/body-parser';
import coreMiddleware from './config/core-middleware';
import csrf from './config/csrf';
import handler from './config/handler';
import mongoose from './config/mongoose';
import databaseSeeder from './config/database-seeder';
import routes from './config/routes';
import passport from './config/passport';
import './config/helpers';

class App
{
    initialize() {
        let app = express();

        processHandler();

        // Gzip Compress for compressing all accessed files
        compress(app);

        // Build JS & CSS
        app.use('/dist', express.static(`${__dirname}/public/dist`));
        // Build Fonts
        app.use('/fonts', express.static(`${__dirname}/public/fonts`));
        // HTML Files
        app.use('/views', express.static(`${__dirname}/resources/views`));

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
    }
}

export default App;
