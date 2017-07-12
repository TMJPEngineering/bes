import compression from 'compression'

export default app => {
    // Gzip compression
    app.use(compression({ filter: shouldCompress }))
}

function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) return false

    return compression.filter(req, res)
}
