/* global Models */

class WelcomeController {
    test(request, response) {
        Models('Welcome').index();
        response.send('Test');
    }
}

module.exports = new WelcomeController;
