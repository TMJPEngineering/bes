/* global env */

export default {
    /**
     * Application Log Types
     *
     * Logs to be show by type of log message
     * Available Settings: "stack", "long-message", "message"
     */
    log: 'stack',

    /**
     * Application Environment
     */
    env: env.APP_ENV || 'production',

    /**
     * Application Debug Mode
     *
     * When the application is in debug mode,
     * it will show the logs upon running the system.
     */
    debug: env.APP_DEBUG || false,

    /**
     * Application URL
     */
    url: env.APP_URL || 'http://localhost',

    /**
     * Application Hostname
     */
    host: env.APP_HOST || '',

    /**
     * Application Port
     */
    port: process.env.PORT || env.APP_PORT || 3000, // process.env.PORT - Default name for Heroku (auto-generated)
};
