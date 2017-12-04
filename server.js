/* global env, logger, LOGGER_TYPE */

import App from './app';
import http from 'http';
import socketIo from 'socket.io';
import sockets from './config/sockets';

class Server
{
    run(app) {
        const server = http.createServer(app);
        const port = env.NODE_PORT || 3000;

        // If the development is for testing purpose or development. Use 'development'
        if (env.NODE_ENV === 'development') {
            env.APP_URL = `${env.APP_URL}:${port}`;
        }

        // Socket configuration
        const io = socketIo(server);
        sockets(io);

        server.listen(port, env.HOSTNAME, () => {
            logger(`Server listening on ${env.APP_URL}, Ctrl+C to stop`, LOGGER_TYPE.INFO);
        });

        return server;
    }
}

const app = new App;
const _server = new Server;
let server = _server.run(app.initialize());

export default server;
