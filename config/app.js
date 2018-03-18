/* global env */

export default {
    /**
     * Application Log Types
     *
     * Available Settings: "stack", "long-message", "message"
     */
    log: 'stack',

    /**
     * Application Environment
     */
    env: env.APP_ENV || 'production',

    /**
     * Application Debug Mode
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
    port: env.PORT || env.APP_PORT || 3000, // PORT - Default name for Heroku

    /**
     * Application Locale Configuration
     */
    locale: env.APP_LOCALE || 'en'
};
