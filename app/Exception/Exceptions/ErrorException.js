import LogErrorHandler from '~/app/Handler/LogErrorHandler';

class ErrorException {
    handle(error) {
        let logErrorHandler = new LogErrorHandler();
        logErrorHandler.show(error, new Error());
    }
}

export default ErrorException;
