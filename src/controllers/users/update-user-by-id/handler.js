const { updateUserById } = require("../../../services/db")

module.exports = async (req, res) => {
  const { userId } = req.params

  const updatedUser = await updateUserById(userId, req.body)

  res.json(updatedUser)
}
