import view from '~/vendor/view'

module.exports = method => {
    let methods = {
        index
    }

    return methods[method]
}

function index(req, res) {
    if (req.route.methods.get) {
        view('welcome.index', res)
    }
}
