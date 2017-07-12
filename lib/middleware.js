import csrf from 'csurf'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import methodOverride from 'method-override'
import session from 'express-session'
import passport from 'passport'

const csrfProtection = csrf({ cookie: true })

export default app => {
    app.use(cookieParser(Math.random().toString(36).substring(7)))
    app.use(csrfProtection)
    app.use(helmet())
    app.use(methodOverride('X-HTTP-Method-Override'))
    app.use(session({
        secret: app.__env.SESSION_SECRET || 'secret',
        resave: false,
        saveUninitialized: true
    }))
    app.use(passport.initialize())
    app.use(passport.session())
}
