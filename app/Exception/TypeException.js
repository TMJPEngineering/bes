import ErrorHandler from './ErrorHandler';

function TypeException(error) {
    let errorHandler = new ErrorHandler;
    errorHandler.showErrorToString(error, new TypeError);
};

module.exports = TypeException;
