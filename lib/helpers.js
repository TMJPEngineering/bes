import chalk from 'chalk';
import nodeEnv from 'node-env-file';
import path from 'path';
import route from '~/vendor/router';

let root = path.dirname(__dirname);

/**
 * Load .env in the root directory of the this project
 * @return {Object}
 */
global.env = nodeEnv(`${__dirname}/../.env`);

/**
 * Get cookie from cookie by name
 * @param {String} cookie
 * @param {String} name
 * @return {String}
 */
global.getCookie = (cookie, name) => {
    let value = "; " + cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length == 2) return unescape(parts.pop().split(";").shift());
};

/**
 * Helper for chalk
 * @param {String} message
 * @param {String} color
 * @return {String}
 */
global.paint = (message, color) => {
    return chalk[color](message);
};

/**
 * Chalk colors
 * @return {Object}
 */
global.CHALK_COLOR = {
    log: 'white',
    info: 'blue',
    warn: 'yellow',
    error: 'red',
    dir: 'gray',
    time: 'white',
    timeEnd: 'white',
    assert: 'cyan'
};

/**
 * Helper for console
 */
global.logger = (message, type) => {
    if (type == undefined || type == 'log') {
        console.log(message);
        return;
    }

    console[type](global.paint(message, global.CHALK_COLOR[type]));
};

/**
 * Logger type for console
 * @return {Object}
 */
global.LOGGER_TYPE = {
    DEFAULT: 'log',
    INFO: 'info',
    WARNING: 'warn',
    DANGER: 'error',
    DIRECTORY: 'dir',
    TIME: 'time',
    TIME_END: 'timeEnd',
    TRACE: 'trace',
    ASSERT: 'assert'
};

/**
 * Add suffix `controller` per file. e.g. `welcome.controller`
 * @return {String}
 */
global.toController = value => value.replace(/([a-z](?=[A-Z]))Controller/g, '$1.controller').toLowerCase();

/**
 * Trim slashes
 * @return {String}
 */
global.trimUri = value => value.replace(/\/$/, '');

/**
 * View helper to load HTML files
 * @return {File}
 */
global.view = (file, res) => {
    let filename = file.replace(/\./g, '/');
    res.sendFile(`${root}/resources/views/${filename}.html`);
};

global.Route = route;
