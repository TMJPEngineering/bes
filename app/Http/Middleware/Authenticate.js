function Authenticate (request, response, next) {
    if (!!request.session.passport && !!request.session.passport.user && !!request.user) {
        return next();
    }

    response.redirect('/login');
}

module.exports = Authenticate;
