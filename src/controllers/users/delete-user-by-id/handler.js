const { deleteUserById } = require("../../../services/db")

module.exports = async (req, res) => {
  const { userId } = req.params

  await deleteUserById(userId)

  res.sendStatus(204)
}
