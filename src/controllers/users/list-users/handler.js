const { getAllUsers } = require("../../../services/db")

module.exports = async (req, res) => {
  const users = await getAllUsers()

  res.json(users)
}
