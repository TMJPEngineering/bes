class WelcomeController
{
    test(request, response) {
        response.send('Test');
    }
}

module.exports = new WelcomeController;
