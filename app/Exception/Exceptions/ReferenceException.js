import LogErrorHandler from '~/app/Handler/LogErrorHandler';

class ReferenceException {
    handle(error) {
        let logErrorHandler = new LogErrorHandler();
        logErrorHandler.show(error, new ReferenceError());
    }
}

export default ReferenceException;
