const controller = require("./controller")
const db = require("../services/db")

module.exports = controller(async (req, res) => {
  try {
    await db.query("SELECT 1;")
    res.json({ status: "ok" })
  } catch (error) {
    res.json({ status: "Unable to connect to database" })
  }
})
