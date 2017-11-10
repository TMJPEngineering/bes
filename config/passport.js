/* global env, Models, logger */

import passport from 'passport';
import TMJStrategy from 'tmj-passport';
import LocalStrategy from 'passport-local';

export default () => {
    let User = new Models('User');

    // Local Passport
    passport.use(new LocalStrategy({
        'usernameField': 'email',
        'passwordField': 'password'
    }, (email, password, done) => {
        User.findOneByEmail({ email, password, done }).then((result) => {
            logger(result);
        });
    }));

    if (env.BE_TALK_API !== 'null' && env.BE_TALK_TOKEN !== 'null') {
        // TMJ Passport
        passport.use(new TMJStrategy({
            apiToken: env.BE_TALK_TOKEN,
            uri: `${env.BE_TALK_API}/login`,
            usernameField: 'username',
            passwordField: 'password'
        }));
    }

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });
};
