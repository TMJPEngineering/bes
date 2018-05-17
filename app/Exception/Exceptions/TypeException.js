import LogErrorHandler from '~/app/Handler/LogErrorHandler';

class TypeException {
    handle(error) {
        let logErrorHandler = new LogErrorHandler();
        logErrorHandler.show(error, new TypeError());
    }
}

export default TypeException;
