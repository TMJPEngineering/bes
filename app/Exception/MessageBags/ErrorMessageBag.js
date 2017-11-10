/* global logger */

import config from '~/config/error';

function ErrorMessageBag(err) {
    let defaultType = '';
    let service = {
        stacktrace,
        message,
        errorlog
    };

    onInit();

    function onInit() {
        defaultType = config.errorMessageBag.default || 'stacktrace';
        service[defaultType](err);
    }

    function stacktrace(error) {
        logger(error.stack);
    }

    function message(error) {
        logger(`${error.toString()}`);
    }

    function errorlog(error) {
        logger(`${error.name}: ${error.message} in ${error.fileName} at line #${error.lineNumber} and column #${error.columnNumber}`);
    }
}

module.exports = ErrorMessageBag;
