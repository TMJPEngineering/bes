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

    function onEnd(err) {
        // run process before closing
        logger('Before process end, running all registered callbacks.');
        runCallbacks(err);
        logger('All registered callbacks have been run, process will now end.');
        // process.exit(0);
    }

    function runCallbacks(err) {
        let collections = Kernel.messageBags;
        let root = path.dirname(require.main.filename) + '/';
        for (let key in collections) {
            require(root + collections[key])(err);
        }
    }
};
