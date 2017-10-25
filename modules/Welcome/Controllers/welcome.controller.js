// import User from '~/modules/User/Entities/user.entity';

class WelcomeController {
    home(request, response) {
        // User.test();
        response.send('I\'m home');
    }
}

module.exports = new WelcomeController;
