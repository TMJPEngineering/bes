import LogErrorHandler from '~/app/Handler/LogErrorHandler';

let ErrorException = function (error) {
    let logErrorHandler = new LogErrorHandler();
    logErrorHandler.show(error, new Error());
};

module.exports = ErrorException;
