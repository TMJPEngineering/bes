import Mongoose from 'mongoose'
import bcrypt from 'bcrypt'

let userSchema = new Mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        set: password => bcrypt.hashSync(password, 10)
    }
})

userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

export default Mongoose.model('User', userSchema)
