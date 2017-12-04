/* global logger, LOGGER_TYPE */

export default app => {
    // Error Handler
    app.use((error, request, response, next) => {
        if (error.code === 'EBADCSRFTOKEN') {
            logger(error, LOGGER_TYPE.DANGER);
            return next(error);
        }
        return next();
    });
};
