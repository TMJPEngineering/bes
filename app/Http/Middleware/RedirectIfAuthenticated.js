class RedirectIfAuthenticated {
    handle (request, response, next) {
        if (request.user != undefined) {
            response.redirect('/');
        }
        return next();
    }
}

export default RedirectIfAuthenticated;
