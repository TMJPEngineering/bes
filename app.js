import express from 'express'
import env from 'node-env-file'
import compress from './lib/compress'
import bodyParser from './lib/body-parser'
import middleware from './lib/middleware'
import csrf from './lib/csrf'
import handler from './lib/handler'
import mongoose from './lib/mongoose'
import routes from './lib/routes'
import passport from './lib/passport'

let app = express()
 // Load .env in the root directory of the this project
let __env = env(`${__dirname}/.env`)

// Get environment properties from a .env file for local development
app.__env = __env

// If the development is for testing purpose or development. Use 'local'
if (app.__env.APP_ENV === 'local') {
    app.__env.APP_URL = `${__env.APP_URL}:${__env.NODE_PORT}`
}

// Gzip Compress for compressing all accessed files
compress(app)

// Libraries for client-side
app.use('/bower_components', express.static(`${__dirname}/bower_components`))
// Assets: JS & CSS
app.use('/js', express.static(`${__dirname}/public/js`))
app.use('/css', express.static(`${__dirname}/public/css`))
// HTML Files
app.use('/views', express.static(`${__dirname}/resources/views`))

// This library uses req.body for requests like POST method, etc.
bodyParser(app)
// This library uses for security purposes like session, crsf, passport, and helmet.
middleware(app)
// Set csrf token in cookie
csrf(app)
// Centralized error handler
handler(app)
// Database configuration
mongoose(app)
// Set of routes in an application
routes(app)
// Passport configuration
passport(app)

export default app
