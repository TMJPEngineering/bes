/* global logger */

module.exports = (app) => {
    // Centralized error handler
    app.use((error, request, response, next) => {
        if (error.code === 'EBADCSRFTOKEN') {
            logger.error(error);
            return next(error);
        }
        return next();
    });
};
