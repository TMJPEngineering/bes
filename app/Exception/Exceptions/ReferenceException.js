import ErrorHandler from '~/app/Handler/ErrorHandler';

let ReferenceException = function (error) {
    let errorHandler = new ErrorHandler;
    errorHandler.showErrorToString(error, new ReferenceError);
};

module.exports = ReferenceException;
