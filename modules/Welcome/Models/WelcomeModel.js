import WelcomeSchema from './WelcomeSchema';

class Welcome {
    constructor() {

    }

    index() {
        console.log('index');
    }

    get() {
        console.log('get');
    }
}

export default new Welcome();
