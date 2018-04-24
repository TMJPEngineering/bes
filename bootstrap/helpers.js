import { Router } from 'bes-routing';
import { helpers } from 'bes-utils';
import { trans } from 'bes-translation';

import app from '~/config/app';
import database from '~/config/database';
import logger from '~/config/logger';

let connection = database.connections[database.default];

Object.assign(global, helpers);

/**
 * TMJ config variables
 * @return {Object}
 */
global.config = {
    app,
    database,
    logger
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
            model = require('~/modules/' + moduleSplit[0] + '/Models/' + moduleSplit[1]);
        } else if (moduleSplit.length === 1) {
            model = require('~/modules/' + moduleSplit[0] + '/Models/');
        } else {
            throw new Error(module + ' module not found.');
        }

        return model;
    } catch (err) {
        throw new Error(module + ' module not found.');
    }
};

/**
 * Global Schema
 */
if (typeof connection !== 'undefined') global.Schema = connection.schema;

/**
 * Global DB
 */
if (typeof connection !== 'undefined') global.DB = connection.driver;

/**
 * Translation based on bes translation
 * For more info: Check on this repository
 * https://github.com/kingleuther/bes-translation
 */
global.trans = trans;
