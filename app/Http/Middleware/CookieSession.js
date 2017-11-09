import session from 'cookie-session';

let initSession = session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 60 * 1000
    }
});

module.exports = initSession;
