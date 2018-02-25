/* global Route */

import WelcomeRoutes from '~/modules/Welcome/Routes/welcome.routes';

export default app => {
    // Set app in route config
    Route.setApp(app);

    // Call your module routes here
    // e.g. UserRoutes(), AuthRoutes()
    Route.group({ middleware: ['web'] }, () => {
        WelcomeRoutes();

        // Logout function
        Route.get('/logout', (request, response) => {
            request.logout();
            response.redirect('/login');
        });

        // If the url doesn't exist, redirect to /
        Route.all('/*', (request, response) => {
            response.redirect('/');
        });
    });
    Route.endGroup();
};
