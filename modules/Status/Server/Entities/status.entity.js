import Schema from '../Schemas/status.schema'

class Status {
    static find(id) {
        return Schema.findById(id).exec((err, status) => {
            if (err) throw err
        })
    }

    static all() {
        return Schema.find().exec((err, status) => {
            if (err) throw err
        })
    }

    static save(params) {
        var status = new Schema(params)

        status.save(err => {
            if (err) throw err
        })

        return status
    }
}

export default Status
