const router = require("express").Router()

const coasterRoutes = require("./coasters.routes")
router.use("/coasters", coasterRoutes)

const authRoutes = require("./auth.routes")
router.use("/auth", authRoutes)

module.exports = router