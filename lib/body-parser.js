import bodyParser from 'body-parser'

export default app => {
    // This will use `req.body`
    app.use(bodyParser.urlencoded({ extended: true }))
    app.use(bodyParser.json())
}
