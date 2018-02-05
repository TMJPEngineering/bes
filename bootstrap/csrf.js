export default app => {
    app.use((request, response, next) => {
        response.cookie('XSRF-TOKEN', request.csrfToken());
        next();
    });
};
