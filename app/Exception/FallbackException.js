/* global LOGGER_TYPE, logger */

import ErrorMessageBag from './MessageBags/ErrorMessageBag'

let FallbackException = function (error) {
    let errorMessageBag = new ErrorMessageBag(error);

    logger(errorMessageBag.getMessage(), LOGGER_TYPE.DANGER);
};

module.exports = FallbackException;
