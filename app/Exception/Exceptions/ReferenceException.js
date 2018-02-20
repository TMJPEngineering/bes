import LogErrorHandler from '~/app/Handler/LogErrorHandler';

let ReferenceException = function (error) {
    let logErrorHandler = new LogErrorHandler();
    logErrorHandler.show(error, new ReferenceError());
};

module.exports = ReferenceException;
