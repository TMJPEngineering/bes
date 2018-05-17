import { BaseVerifier } from 'bes-middleware';

class VerifyCsrfToken {
    handle(...payload) {
        /**
         * The URIs that should be excluded from CSRF verification.
         *
         * @var array
         */
        let except = [
            //
        ];

        return new BaseVerifier(except, ...payload);
    }
}

export default VerifyCsrfToken;
