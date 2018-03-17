/* global config */

import * as databaseConnection from './database-connection';

export default () => {
    const database = config.database;
    if (database.default) {
        const defaultDatabase = database.default;
        const connection = database.connections[database.default];

        databaseConnection[defaultDatabase](connection);
    }
};
