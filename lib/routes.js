import Router from '~/vendor/router'
import StatusRoutes from '~/modules/Status/Server/Routes/status.routes'
import WelcomeRoutes from '~/modules/Welcome/Server/Routes/welcome.routes'

export default app => {
    // Set app in router config
    Router.setApp(app)

    // Call your module routes here
    // e.g. UserRoutes(), AuthRoutes()
    StatusRoutes()
    WelcomeRoutes()

    // Logout function
    app.get('/logout', (req, res) => {
        req.logout()
        res.redirect('/login')
    })

    // If the url doesn't exist, redirect to /
    app.all('/*', (req, res) => {
        res.redirect('/')
    })
}
