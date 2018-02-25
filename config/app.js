/* global env */

export default {
    /**
     * Logging Configuration
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
    port: env.APP_PORT || 3000,

    /**
     * Application Locale Configuration
     */
    locale: env.APP_LOCALE || 'en'
};
