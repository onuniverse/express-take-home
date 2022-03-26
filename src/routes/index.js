/// Configure routes for the application here
const express = require("express")
const bodyParser = require("body-parser")

const controllers = require("../controllers")

const router = express.Router()

router.get("/status", controllers.status)

router.use(bodyParser.json())

router.get("/artists/search", controllers.artists.search)

router
  .route("/users")
  .get(controllers.users.list)
  .post(controllers.users.create)

router
  .route("/users/:userId")
  .get(controllers.users.getById)
  .put(controllers.users.updateById)
  .delete(controllers.users.deleteById)

module.exports = router
