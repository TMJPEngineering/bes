import Mongoose from 'mongoose'
import crypto from 'crypto'
import sharedPlugin from '~/modules/Shared/Server/Schemas/shared.schema'

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
        set: password => crypto.createHash('sha1').update(password).digest('hex')
    }
})

userSchema.methods.verifyPassword = password => this.password === crypto.createHash('sha1').update(password).digest('hex')
userSchema.plugin(sharedPlugin)

export default Mongoose.model('User', userSchema)
