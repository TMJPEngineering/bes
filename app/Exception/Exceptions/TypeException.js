import ErrorHandler from '~/app/Handler/ErrorHandler';

let TypeException = function (error) {
    let errorHandler = new ErrorHandler;
    errorHandler.showErrorToString(error, new TypeError);
};

module.exports = TypeException;
