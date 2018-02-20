import LogErrorHandler from '~/app/Handler/LogErrorHandler';

let TypeException = function (error) {
    let logErrorHandler = new LogErrorHandler();
    logErrorHandler.show(error, new TypeError());
};

module.exports = TypeException;
