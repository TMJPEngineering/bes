class ErrorMessageBag {
    constructor(error) {
        this.error = error;
    }

    setError(error) {
        this.error = error;
    }

    getMessage() {
        return this.error.message;
    }

    getName() {
        return this.error.name;
    }

    getFileName() {
        return this.error.fileName;
    }

    getLineNumber() {
        return this.error.lineNumber;
    }

    getColumnNumber() {
        return this.error.columnNumber;
    }

    getStackTrace() {
        return this.error.stack;
    }

    toString() {
        return this.error.toString();
    }
}

export default ErrorMessageBag;
