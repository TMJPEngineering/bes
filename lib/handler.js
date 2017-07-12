export default app => {
    // Error Handler
    app.use((err, req, res, next) => {
        console.log(err)
        next()
    })
}
