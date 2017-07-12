import path from 'path'

let root = path.dirname(__dirname)

export default (file, res) => {
    let filename = file.replace(/\./g, '/')
    res.sendFile(`${root}/resources/views/${filename}.html`)
}
