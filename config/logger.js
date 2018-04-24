import Logger from 'bes-logger/src/logger';

/**
* --------------------------------------------------------------------------
* Logger Configuration
* --------------------------------------------------------------------------
*
* Here you may configure the log settings for your application. Out of
* the box, Bes uses bes-logger library. This gives
* you a variety of powerful log handlers / formatters to utilize.
*
*/
export default {
    /**
     * Bes logger log
     *
     * Available Settings: "single", "daily"
     */
    log: 'single',

    /**
     * Bes logger levels
     *
     * Available level: info, warn, debug, error
     */
    level: 'info',

    /**
     * Bes logger format
     *
     * Available format: json, plain
     */
    format: 'json',

    /**
     * Bes logger transports
     */
    transports: [
        new Logger.transports.File({ filename: 'storage/logs/error.log', level: 'error' }),
        new Logger.transports.File({ filename: 'storage/logs/combined.log' })
    ]
};
