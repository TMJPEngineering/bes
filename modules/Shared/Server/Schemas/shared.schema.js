export default (schema, options) => {
    // Auto create created_at and updated_at
    schema.add({
        created_at: {
            type: Date,
            require: true
        },
        updated_at: {
            type: Date,
            require: true
        }
    })

    // Enable Mongoose getter & setter functions
    schema.set('toObject', {
        getters: true,
        virtuals: true
    })

    schema.set('toJSON', {
        getters: true,
        virtuals: true
    })

    // Auto save created_at and updated_at
    schema.pre('save', function (next) {
        let currentDate = new Date() // current date
        this.updated_at = currentDate // update the updated_at
        if (!this.created_at)
            this.created_at = currentDate
        next()
    })
}
