class Status {
    static find(id) {
        return axios.get('/statuses/' + id)
            .then(({ data }) => data)
    }

    static all(then) {
        return axios.get('/statuses')
            .then(({ data }) => then(data))
    }
}

export default Status
