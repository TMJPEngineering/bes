import chalk from 'chalk';
import path from 'path';

import app from '~/config/app';
import database from '~/config/database';
import logger from '~/config/logger';
import modules from '~/config/modules';
import Router from '~/vendor/router';
import Kernel from '~/app/Http/Kernel';

let root = path.dirname(__dirname);
let connection = database.connections[database.default];

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
global.tmj_view = (file, res) => {
    let filename = file.replace(/\./g, '/');
    res.sendFile(`${root}/resources/views/${filename}.html`);
};

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
 * Controller helper to load new controller class
 */
global.BaseController = (controllerPath, method) => {
    const controller = require(controllerPath);
    return controller[method];
};

/**
 * Global middleware
 */
global.Middleware = (value) => {
    const rootPath = root + '/';

    if (Kernel.middlewareGroups.hasOwnProperty(value)) {
        let middlewareGroups = [];
        Kernel.middlewareGroups[value].forEach((filepath) => {
            middlewareGroups.push(require(rootPath + filepath));
        });
        return middlewareGroups;
    }

    return [];
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

