/* global config */

import * as databaseConnection from './database-connection';

export default () => {
    const database = config.database;
    const defaultDatabase = database.default;
    const connection = database.connections[database.default];

    databaseConnection[defaultDatabase](connection);
};