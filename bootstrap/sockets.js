/* global logger */

export default io => {
    io.on('connection', socket => {
        logger.info('Socket connection started');
        logger.info(`Socket ID: ${socket.id}`);
    });
};
