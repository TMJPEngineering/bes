/* global env */

import session from 'cookie-session';

module.exports = (app) => {
    let minutes = env.SESSION_TIMEOUT || 60;
    let initSession = session({
        secret: env.SESSION_KEY || 'secret',
        resave: true,
        saveUninitialized: true,
        cookie: {
            maxAge: minutes * 60 * 1000
        }
    });

    app.use(initSession);
};
