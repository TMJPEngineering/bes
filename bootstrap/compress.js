import compression, { filter } from 'compression';

export default app => {
    // Gzip compression
    app.use(compression({ filter: shouldCompress }));
};

function shouldCompress(request, response) {
    if (request.headers['x-no-compression']) return false;

    return filter(request, response);
}
