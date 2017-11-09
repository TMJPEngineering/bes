/* global Models */

class WelcomeController {
    home(request, response) {
        Models('Welcome').index();
        response.send('I\'m home');
    }
}

module.exports = new WelcomeController;
