class Errors {
    constructor() {
        this.errors = {}
    }

    any() {
        return Object.keys(this.errors).length > 0
    }

    clear(field) {
        if (field) {
            delete this.errors[field]

            return
        }

        this.errors = {}
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0]
        }
    }

    has(field) {
        return this.errors.hasOwnProperty(field)
    }

    record(errors) {
        this.errors = errors
    }
}

export default Errors
