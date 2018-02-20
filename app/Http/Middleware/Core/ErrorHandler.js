/* global logger, LOGGER_TYPE */

module.exports = (app) => {
    // Centralized error handler
    app.use((error, request, response, next) => {
        if (error.code === 'EBADCSRFTOKEN') {
            logger(error, LOGGER_TYPE.DANGER);
            return next(error);
        }
        return next();
    });
};
