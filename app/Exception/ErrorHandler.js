/* global logger, LOGGER_TYPE */

import ErrorMessageBag from './MessageBags/ErrorMessageBag';

class ErrorHandler {
    showErrorMessage(error, errorInstance) {
        if (error.name === String(errorInstance.constructor.name)) {
            let errorMessageBag = new ErrorMessageBag(error);
            logger(errorMessageBag.getMessage(), LOGGER_TYPE.DANGER);
        }
    }

    showErrorToString(error, errorInstance) {
        if (error.name === String(errorInstance.constructor.name)) {
            let errorMessageBag = new ErrorMessageBag(error);
            logger(errorMessageBag.toString(), LOGGER_TYPE.DANGER);
        }
    }

    showStacktrace(error, errorInstance) {
        if (error.name === String(errorInstance.constructor.name)) {
            let errorMessageBag = new ErrorMessageBag(error);
            logger(errorMessageBag.getStackTrace(), LOGGER_TYPE.DANGER);
        }
    }
}

export default ErrorHandler;
