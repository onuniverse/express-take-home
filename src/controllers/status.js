const controller = require("./controller")

module.exports = controller((req, res) => {
  res.json({ status: "ok" })
})
