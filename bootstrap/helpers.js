import { Router } from 'bes-routing';
import { helpers } from 'bes-utils';
import chalk from 'chalk';
import path from 'path';

import app from '~/config/app';
import database from '~/config/database';
import logger from '~/config/logger';
import modules from '~/config/modules';

let root = path.dirname(__dirname);
let connection = database.connections[database.default];

Object.assign(global, helpers);

/**
 * TMJ config variables
 * @return {Object}
 */
global.config = {
    app,
    database,
    logger,
    modules
};

/**
 * Get cookie from cookie by name
 * @param {String} cookie
 * @param {String} name
 * @return {String}
 */
global.getCookie = (cookie, name) => {
    let value = "; " + cookie;
    let parts = value.split("; " + name + "=");
    if (parts.length === 2) return unescape(parts.pop().split(";").shift());
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
global.LOGGER_COLOR = logger.color;

/**
 * Helper for console
 */
global.logger = (message, type) => {
    if (type === undefined) {
        type = 'log';
    }
    message = new Date().toLocaleString() + ' [' + type.toUpperCase() + ']: ' + message;
    if (app.debug === 'true') {
        console[type](global.paint(message, global.LOGGER_COLOR[type]));
    }
};

/**
 * Logger type for console
 * @return {Object}
 */
global.LOGGER_TYPE = logger.type;

/**
 * Global Route
 * @return {Object}
 */
global.Route = Router;

/**
 * Set namespace in every module
 */
global.namespace = (moduleName) => {
    Router.setNamespace(moduleName);
};

/**
 * Global models
 */
global.Models = (module) => {
    try {
        let moduleSplit = module.split('/');
        let model;

        if (moduleSplit.length > 1 && moduleSplit.length <= 2) {
            model = require(root + '/modules/' + moduleSplit[0] + '/Models/' + moduleSplit[1]);
        } else if (moduleSplit.length == 1) {
            model = require(root + '/modules/' + moduleSplit[0] + '/Models/');
        } else {
            throw module + ' module not found.';
        }

        return model;
    } catch (err) {
        throw module + ' module not found.';
    }
};

/**
 * Global Schema
 */
global.Schema = connection.schema

/**
 * Global DB
 */
global.DB = connection.driver

