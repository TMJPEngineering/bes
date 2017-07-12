export default app => {
    app.use((req, res, next) => {
        res.cookie('XSRF-TOKEN', req.csrfToken())
        next()
    })
}
