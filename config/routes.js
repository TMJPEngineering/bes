/* global Route */

import WelcomeRoutes from '~/modules/Welcome/Routes/welcome.routes';

export default app => {
    // Set app in route config
    Route.setApp(app);

    // Call your module routes here
    // e.g. UserRoutes(), AuthRoutes()
    WelcomeRoutes();

    // Logout function
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/login');
    });

    // If the url doesn't exist, redirect to /
    app.all('/*', (req, res) => {
        res.redirect('/');
    });
};
