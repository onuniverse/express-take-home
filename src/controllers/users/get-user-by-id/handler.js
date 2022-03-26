const { getUserById } = require("../../../services/db")

module.exports = async (req, res) => {
  const { userId } = req.params

  const user = await getUserById(userId)

  res.json(user)
}
