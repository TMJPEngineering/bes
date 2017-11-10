import ErrorHandler from './ErrorHandler';

function ReferenceException(error) {
    let errorHandler = new ErrorHandler;
    errorHandler.showErrorToString(error, new ReferenceError);
};

module.exports = ReferenceException;
