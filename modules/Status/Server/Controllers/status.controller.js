import Status from '../Entities/status.entity'

module.exports = method => {
    let methods = {
        index,
        show,
        store
    }

    return methods[method]
}

function index(req, res) {
    if (req.route.methods.get) {
        // Get statuses
        Status.all().then(result => {
            res.json(result)
        })
    }
}

function show(req, res) {
    if (req.route.methods.get) {
        // Get status by id
        Status.find(req.params.id).then(result => {
            res.json(result)
        })
    }
}

function store(req, res) {
    if (req.route.methods.post) {
        // Save status
        let status = Status.save(req.body)

        res.json(status)
    }
}
