const { createUser } = require("../../../services/db")

module.exports = async (req, res) => {
  const newUser = await createUser(req.body)

  res.json(newUser)
}
