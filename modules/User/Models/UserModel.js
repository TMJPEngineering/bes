import UserSchema from './UserSchema';

class UserModel {
    findOneByUsername(payload) {
        return UserSchema.findOne({ username: payload.username }, (err, user) => {
            if (err) return payload.done(err);
            if (!user) return payload.done(null, false);
            if (!user.verifyPassword(payload.password)) return payload.done(null, false);
            return payload.done(null, user);
        });
    }
}

export default new UserModel();
