/* global logger */

import UserSchema from './UserSchema';

class UserModel {
    constructor() {
        this.query = undefined;
        this.schema = UserSchema;
        logger(`User`);
    }

    findOne(payload, callback) {
        if (payload) {
            logger(`findOne(${JSON.stringify(payload)})`);
            this.query = this.schema.findOne(payload, callback);
            return this;
        }

        logger(`findOne()`);
        this.query = this.schema.findOne();
        return this;
    }

    execute() {
        logger(`execute()`);
        return this.query.exec(this._exec);
    }

    _exec(error, user) {
        if (error) return error;
    }
}

export default new UserModel();
