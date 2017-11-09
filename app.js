import express from 'express';
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

class App {
    init() {
        let app = express();

        // Gzip Compress for compressing all accessed files
        compress(app);

        // Build Assets: JS & CSS
        app.use('/dist', express.static(`${__dirname}/public/dist`));
        // HTML Files
        app.use('/views', express.static(`${__dirname}/resources/views`));

        // This library uses req.body for requests like POST method, etc.
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
