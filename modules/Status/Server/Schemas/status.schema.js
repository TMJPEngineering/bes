import Mongoose from 'mongoose'
import sharedPlugin from '~/modules/Shared/Server/Schemas/shared.schema'

let statusSchema = new Mongoose.Schema({
    user_id: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
})

statusSchema.plugin(sharedPlugin)

export default Mongoose.model('Statuses', statusSchema)
