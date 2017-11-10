/* global Models */
let User = new Models('User');

class WelcomeController {
    test(request, response) {
        User.index();
        response.send('Test');
    }
}

module.exports = new WelcomeController;
