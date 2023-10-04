exports.createPost = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "Post Created" })
}
exports.readPost = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "This is Post" })
}
exports.deletePost = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "Post Deleted" })
}
exports.updatePost = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "Post Updated" })
}