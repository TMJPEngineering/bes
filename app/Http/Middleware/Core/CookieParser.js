import cookieParser from 'cookie-parser';

module.exports = (app) => {
    app.use(cookieParser(Math.random().toString(36).substring(7)));
};
