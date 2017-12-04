function VerifyCsrfToken(request, response, next) {
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    const except = [
        //
    ];

    return next();
}

module.exports = VerifyCsrfToken;
