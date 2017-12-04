import ErrorHandler from '~/app/Handler/ErrorHandler';

let ErrorException = function (error) {
    let errorHandler = new ErrorHandler;
    errorHandler.showErrorToString(error, new Error);
};

module.exports = ErrorException;
