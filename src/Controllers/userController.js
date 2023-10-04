exports.createUser = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "User Created" })
}
exports.readUser = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "This is User" })
}
exports.deleteUser = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "User Deleted" })
}
exports.updateUser = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "User Updated" })
}