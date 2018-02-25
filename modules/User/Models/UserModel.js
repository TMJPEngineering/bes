/* global logger */

import UserSchema from './UserSchema';

class UserModel {
    constructor() {
        this.query = undefined;
        this.schema = UserSchema;
        logger(`User`);
    }
}

export default new UserModel();
