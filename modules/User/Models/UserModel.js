/* global logger */

import UserSchema from './UserSchema';
import Model from '~/modules/Shared/Models/QueryBuilder';

class UserModel extends Model {
    constructor() {
        super(UserSchema);
        logger.debug(`User`);
    }
}

export default new UserModel();
