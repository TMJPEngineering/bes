class Authenticate {
    handle (request, response, next) {
        if (!!request.session.passport && !!request.session.passport.user && !!request.user) {
            return next();
        }

        response.redirect('/login');
    }
}

export default Authenticate;
