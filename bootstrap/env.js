import nodeEnv from 'node-env-file';

/**
 * Load .env in the root directory of the this project
 * @return {Object}
 */
global.env = nodeEnv(`${__dirname}/../.env`);
