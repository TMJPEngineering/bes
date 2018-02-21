import bodyParser from 'body-parser';

module.exports = (app) => {
    // This library uses request.body for requests like POST method, etc.
    // This will use `req.body`
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
};
