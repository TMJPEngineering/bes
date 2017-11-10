import UserSchema from './UserSchema';

class UserModel {
    index() {
        console.log('index');
    }

    findOneByEmail(payload) {
        return UserSchema.findOne({ email: payload.email }, (err, user) => {
            if (err) return payload.done(err);
            if (!user) return payload.done(null, false);
            if (!user.verifyPassword(payload.password)) return payload.done(null, false);
            return payload.done(null, user);
        });
    }
}

export default new UserModel();
