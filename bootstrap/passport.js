/* global Models, logger */

import passport from 'passport';
import LocalStrategy from 'passport-local';

export default () => {
    let User = new Models('User');
    
    // Local Passport
    passport.use(new LocalStrategy({
        'usernameField': 'username',
        'passwordField': 'password'
    }, (username, password, done) => {
        User.findOneByUsername({ username, password, done }).then((result) => {
            logger(result);
        });
    }));

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};
