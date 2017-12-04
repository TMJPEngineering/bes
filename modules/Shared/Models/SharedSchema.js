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
    });

    // Enable Mongoose getter & setter functions
    schema.set('toObject', {
        getters: true,
        virtuals: true
    });

    schema.set('toJSON', {
        getters: true,
        virtuals: true
    });

    // Auto save created_at and updated_at
    schema.pre('save', function (next) {
        var currentDate = new Date(); // current dates
        this.updated_at = currentDate;
        this.created_at = currentDate;
        next();
    });

    schema.pre('update', function (next) {
        this.updated_at = new Date();
        next();
    });
};
