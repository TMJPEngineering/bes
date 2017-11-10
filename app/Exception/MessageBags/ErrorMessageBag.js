// Define a functional object to hold errors
var error;

var ErrorMessageBag = function (_error) {
    error = _error;
};

ErrorMessageBag.prototype.setError = function (_error) {
    error = _error
};

ErrorMessageBag.prototype.getMessage = function() {
    return error.message;
};

ErrorMessageBag.prototype.getName = function() {
    return error.name;
};

ErrorMessageBag.prototype.getFileName = function() {
    return error.fileName;
};

ErrorMessageBag.prototype.getLineNumber = function() {
    return error.lineNumber;
};

ErrorMessageBag.prototype.getColumnNumber = function() {
    return error.columnNumber;
};

ErrorMessageBag.prototype.getStackTrace = function() {
    return error.stack;
};

ErrorMessageBag.prototype.toString = function() {
    return error.toString();
};

module.exports = ErrorMessageBag;
