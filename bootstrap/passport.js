/* global Models */

import passport from 'passport';
import LocalStrategy from 'passport-local';

export default () => {
    let User = new Models('User');

    // Local Passport
    passport.use(new LocalStrategy({
        'usernameField': 'username',
        'passwordField': 'password'
    }, (username, password, done) => {
        User.findOne({ username }, (err, user) => {
            if (err) return done(err);
            if (!user) return done(null, false);
            if (!user.verifyPassword(password)) return done(null, false);
            return done(null, user);
        });
    }));

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};
