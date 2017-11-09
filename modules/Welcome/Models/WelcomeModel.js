import WelcomeSchema from './WelcomeSchema';

class WelcomeModel {
    constructor() {

    }

    index() {
        console.log('index');
    }

    get() {
        console.log('get');
    }
}

export default new WelcomeModel();
