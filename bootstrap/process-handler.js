/* global logger */
import Kernel from '~/app/Exception/Kernel';
import path from 'path';

export default () => {
    // prevent the app to close instantly
    process.stdin.resume();

    // on `ctrl` + `c`
    process.on('SIGINT', onEnd);

    // on app close
    process.on('exit', onEnd);

    // on process terminated/kill
    process.on('SIGTERM', onEnd);

    // on uncaught exceptions.
    // catch uncaught exceptions, trace, then exit normally
    process.on('uncaughtException', onEnd);

    function onEnd(error) {
        // run process before closing
        logger.warn('Before process end, running all registered callbacks.');
        runCallbacks(error);
        logger.warn('All registered callbacks have been run, process will now end.');
        // process.exit(0);
    }

    function runCallbacks(error) {
        let collections = Kernel.render;
        let root = path.dirname(require.main.filename) + '/';
        if (collections.length === 0) {
            let fallback = require(root + Kernel.fallback).default;
            let fallbackInstance = new fallback;
            fallbackInstance.handle(error);
        } else {
            for (let key in collections) {
                let collection = require(root + collections[key]).default;
                let collectionInstance = new collection;
                collectionInstance.handle(error);
            }
        }
    }
};
