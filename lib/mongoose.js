import mongoose from 'mongoose'

export default app => {
    let db = mongoose.connection
    db.on('error', console.error)
    db.once('open', () => {
        console.log('connected to db')
    })
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/' + app.__env.MONGO_DATABASE, { useMongoClient: true })
}
