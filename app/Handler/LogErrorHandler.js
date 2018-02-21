/* global logger, LOGGER_TYPE */

import app from '~/config/app';
import ErrorMessageBag from '~/app/Exception/MessageBags/ErrorMessageBag';

class LogErrorHandler {
    constructor() {
        this.error = {
            'stack': this._showStacktrace,
            'long-message': this._showErrorToString,
            'message': this._showErrorMessage
        };
    }

    _showErrorMessage(error, errorInstance) {
        if (error.name === String(errorInstance.constructor.name)) {
            let errorMessageBag = new ErrorMessageBag(error);
            logger(errorMessageBag.getMessage(), LOGGER_TYPE.DANGER);
        }
    }

    _showErrorToString(error, errorInstance) {
        if (error.name === String(errorInstance.constructor.name)) {
            let errorMessageBag = new ErrorMessageBag(error);
            logger(errorMessageBag.toString(), LOGGER_TYPE.DANGER);
        }
    }

    _showStacktrace(error, errorInstance) {
        if (error.name === String(errorInstance.constructor.name)) {
            let errorMessageBag = new ErrorMessageBag(error);
            logger(errorMessageBag.getStackTrace(), LOGGER_TYPE.DANGER);
        }
    }

    show(error, errorInstance) {
        this.error[app.log](error, errorInstance);
    }
}

export default LogErrorHandler;
