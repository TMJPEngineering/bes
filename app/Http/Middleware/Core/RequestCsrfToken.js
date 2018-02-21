module.exports = (app) => {
    // Set csrf token in cookie
    app.use((request, response, next) => {
        response.cookie('XSRF-TOKEN', request.csrfToken());
        next();
    });
};
