function RedirectIfAuthenticated(request, response, next) {
    if (request.user != undefined) {
        response.redirect('/');
    }
    return next();
}

module.exports = RedirectIfAuthenticated;
