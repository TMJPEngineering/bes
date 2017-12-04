export default {
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    middleware: [
        'app/Http/Middleware/CookieParser',
        'app/Http/Middleware/GenerateCsrfToken',
        'app/Http/Middleware/Helmet',
        'app/Http/Middleware/MethodOverride',
        'app/Http/Middleware/CookieSession',
        'app/Http/Middleware/PassportInit',
        'app/Http/Middleware/PassportSession'
    ],

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    middlewareGroups: {
        web: ['app/Http/Middleware/VerifyCsrfToken'],
        api: [],
        auth: ['app/Http/Middleware/Authenticate'],
        guest: ['app/Http/Middleware/RedirectIfAuthenticated']
    }
}
