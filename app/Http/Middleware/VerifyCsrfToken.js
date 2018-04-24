import { BaseVerifier } from 'bes-middleware';

function VerifyCsrfToken (...payload) {
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    const except = [
        //
    ];

    return new BaseVerifier(except, ...payload);
}

module.exports = VerifyCsrfToken;
