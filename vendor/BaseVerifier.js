class BaseVerifier {
    constructor (except, request, response, next) {
        let url = request.originalUrl;

        if (except.includes(url)) {
            response.clearCookie('_csrf');
            response.clearCookie('XSRF-TOKEN');
        }

        return next();
    }
}

export default BaseVerifier;
