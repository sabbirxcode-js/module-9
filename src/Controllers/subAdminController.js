exports.createSubAdmin = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "SubAdmin Created" })
}
exports.readSubAdmin = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "This is SubAdmin" })
}
exports.deleteSubAdmin = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "SubAdmin Deleted" })
}
exports.updateSubAdmin = async (req, res) => {
    res.status(200).json({ "status": "Success", "data": "SubAdmin Updated" })
}