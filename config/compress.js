import compression from 'compression';

export default app => {
    // Gzip compression
    app.use(compression({ filter: shouldCompress }));
};

function shouldCompress(request, response) {
    if (request.headers['x-no-compression']) return false;

    return compression.filter(request, response);
}
