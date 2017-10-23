/* global logger */

export default io => {
    io.on('connection', socket => {
        logger('Socket connection started');
        logger(`Socket ID: ${socket.id}`);
    });
};