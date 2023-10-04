exports.createAdmin = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "Admin Created" })
}
exports.readAdmin = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "This is admin" })
}
exports.deleteAdmin = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "Admin Deleted" })
}
exports.updateAdmin = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "Admin Updated" })
}