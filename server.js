/* global env, logger, LOGGER_TYPE */

import { createServer } from 'http';
import socketIo from 'socket.io';

import App from './app';
import sockets from './bootstrap/sockets';

class Server {
    constructor(app) {
        const server = createServer(app);
        const port = env.NODE_PORT || 3000;

        // If the development is for testing purpose or development. Use 'development'
        if (env.NODE_ENV === 'development') {
            env.APP_URL = `${env.APP_URL}:${port}`;
        }

        // Socket configuration
        const io = socketIo(server, { serveClient: false });
        sockets(io);

        server.listen(port, env.HOSTNAME, () => {
            logger(`Server listening on ${env.APP_URL}, Ctrl+C to stop`, LOGGER_TYPE.INFO);
        });

        return server;
    }
}

export const server = new Server(App());
