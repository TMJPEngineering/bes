/* global Models */

class WelcomeController {
    test(request, response) {
        Models('User').index();
        response.send('Test');
    }
}

module.exports = new WelcomeController;
