import { Router } from 'bes-routing';
import { helpers } from 'bes-utils';
import path from 'path';
import _ from 'lodash';

import app from '~/config/app';
import database from '~/config/database';
import logger from '~/config/logger';
import modules from '~/config/modules';

import Model from '~/modules/Shared/Models/SharedModel';

import * as translation from './translation';

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
        } else if (moduleSplit.length === 1) {
            model = require(root + '/modules/' + moduleSplit[0] + '/Models/');
        } else {
            throw module + ' module not found.';
        }

        Object.assign(model, Model);
        return model;
    } catch (err) {
        throw module + ' module not found.';
    }
};

/**
 * Global Schema
 */
if (typeof connection !== 'undefined') global.Schema = connection.schema

/**
 * Global DB
 */
if (typeof connection !== 'undefined') global.DB = connection.driver

/**
 * Translation based on app locale
 */
global.trans = (name) => {
    let object = translation[app.locale];
    return _.get(object, name);
};
