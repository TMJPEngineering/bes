/* global trimUri, toController, tmj_view, BaseController, Middleware, logger */

import _ from 'lodash';

// Router core object
let core = {
    // Options: This is for route group. It uses `prefix` and `middleware`
    allOptions: {},
    // Empty router
    router: {},
    // Config settings
    config: {
        app: null,
        set: (controller, uri, module, middlewares) => {
            let str = false;
            if (typeof controller == 'string') {
                str = controller.split('@');
            }
            if (middlewares == undefined) middlewares = [];
            if (core.allOptions != undefined && core.allOptions.middleware != undefined) {
                middlewares = _.union(middlewares, core.allOptions.middleware);
            }

            core.router = {
                str,
                module,
                middlewares,
                uri: (core.allOptions !== undefined && core.allOptions.prefix !== undefined) ? `/${core.allOptions.prefix}${uri}` : uri,
                controller: str ? toController(str.shift()) : str
            };
        },
        callback: (res, req, next) => {
            next();
        }
    },
    // Set app in config routes
    setApp: app => { core.config.app = app; },
    // Set namespace in routes
    setNamespace: module => { core.module = module; },
    // Global function for route.
    route: (uri, controller, middlewares, method) => {
        core.config.set(controller, uri, core.module, middlewares);
        let func = controller;
        if (typeof controller == 'string') {
            func = new BaseController(`./../modules/${core.router.module}/Controllers/${core.router.controller}`, core.router.str.pop());
        }
        let url = trimUri(core.router.uri);
        let middleware = (core.router.middlewares) ? core.middleware(core.router.middlewares) : core.config.callback;
        try {
            core.config.app[method](url, middleware, func);
        } catch (e) {
            logger(`Route Exception: ${e}`);
        }
    },
    // Route all - wrapper for app.all
    all: (uri, controller, middlewares) => {
        core.route(uri, controller, middlewares, 'all');
    },
    // Route get for GET/HEAD Method
    get: (uri, controller, middlewares) => {
        core.route(uri, controller, middlewares, 'get');
    },
    // Route post for POST Method
    post: (uri, controller, middlewares) => {
        core.route(uri, controller, middlewares, 'post');
    },
    // Route update for PUT/PATCH Method
    update: (uri, controller, middlewares) => {
        core.route(uri, controller, middlewares, 'put');
    },
    // Route delete for DELETE Method
    delete: (uri, controller, middlewares) => {
        core.route(uri, controller, middlewares, 'destroy');
    },
    // Route view for GET Method
    view: (uri, filename, middlewares) => {
        if (core.allOptions != undefined && core.allOptions.middleware != undefined) {
            middlewares = _.union(middlewares, core.allOptions.middleware);
        }
        let middleware = (middlewares) ? core.middleware(middlewares) : core.config.callback;
        core.config.app.get(uri, middleware, (req, res) => {
            tmj_view(filename, res);
        });
    },
    // Route resource is set of routes. It has `index`, `create`, `show`, `edit`, `store`, `update` and `destroy`.
    resource: (uri, controller, middlewares, options) => {
        core.config.set(controller);
        let resources = ['index', 'create', 'show', 'edit', 'store', 'update', 'destroy'];

        resources = resources.filter(value => {
            if (options !== undefined && options.only !== undefined) {
                return options.only.indexOf(value) !== -1;
            }
            if (options !== undefined && options.except !== undefined) {
                return options.except.indexOf(value) === 1;
            }
            return true;
        });
        resources.forEach(resource => {
            if (resource !== 'store' && resource !== 'update' && resource !== 'destroy') {
                let str = '';
                if (resource === 'create') {
                    str = '/create';
                }
                if (resource === 'show') {
                    str = '/:id';
                }
                if (resource === 'edit') {
                    str = '/:id/edit';
                }
                core.route(`/${uri}${str}`, `${core.router.controller}@${resource}`, middlewares, 'get');
            }
            if (resource === 'store') {
                core.route(`/${uri}`, `${core.router.controller}@${resource}`, middlewares, 'post');
            }
            if (resource === 'update') {
                core.route(`/${uri}`, `${core.router.controller}@${resource}`, middlewares, 'put');
            }
            if (resource === 'destroy') {
                core.route(`/${uri}`, `${core.router.controller}@${resource}`, middlewares, 'delete');
            }
        })
    },
    // Route middlewares: Can add 1 or more middleware in a single route
    middleware: middlewares => {
        let groups = [];
        middlewares.forEach(middleware => {
            let _middleware = new Middleware(middleware);
            if (typeof _middleware == 'object') {
                _middleware.forEach(function (callback) {
                    groups.push(callback);
                });
            }
        });
        return groups;
    },
    // When using the route group, always start with a `group` function then ends with the `endGroup` function
    group: (options, callback) => {
        core.allOptions = options;
        callback(core.allOptions);
    },
    // End of route group
    endGroup: () => {
        core.allOptions = undefined;
    },
    // This is the counterpart of req.all
    all: (uri, callback) => {
        core.config.app.all(uri, (req, res) => {
            callback(req, res);
        });
    }
}

export default core;
