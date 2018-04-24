export default {
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    middleware: [
        'app/Http/Middleware/Core/BodyParser',
        'app/Http/Middleware/Core/CookieParser',
        'app/Http/Middleware/Core/Helmet',
        'app/Http/Middleware/Core/MethodOverride',
        'app/Http/Middleware/Core/CookieSession',
        'app/Http/Middleware/Core/Passport',
        'app/Http/Middleware/Core/ErrorHandler'
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
};
