/* global Schema, DB */

import bcrypt from 'bcrypt';

let userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        set: password => bcrypt.hashSync(password, 10)
    }
});

userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

export default DB.model('User', userSchema);
