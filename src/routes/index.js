const express = require("express")

const controllers = require("../controllers")

const router = express.Router()

router.get("/status", controllers.status)

module.exports = router
