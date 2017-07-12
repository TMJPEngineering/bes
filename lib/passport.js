import passport from 'passport'
import User from '~/modules/User/Server/Schemas/user.schema'
import TMJStrategy from 'tmj-passport'
import LocalStrategy from 'passport-local'

export default app => {
    // Local Passport
    passport.use(new LocalStrategy({
        'usernameField': 'email',
        'passwordField': 'password'
    }, (email, password, done) => {
        User.findOne({ email }, (err, user) => {
            if (err) return done(err)
            if (!user) return done(null, false)
            if (!user.verifyPassword(password)) return done(null, false)

            return done(null, user)
        })
    }))

    if (app.__env.BE_TALK_API !== 'null' && app.__env.BE_TALK_TOKEN !== 'null') {
        // TMJ Passport
        passport.use(new TMJStrategy({
            apiToken: app.__env.BE_TALK_TOKEN,
            uri: `${app.__env.BE_TALK_API}/login`,
            usernameField: 'username',
            passwordField: 'password'
        }))
    }

    passport.serializeUser((user, done) => {
        done(null, user)
    })

    passport.deserializeUser((user, done) => {
        done(null, user)
    })
}
