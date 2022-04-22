const express = require("express")
const { GetBuckets } = require("../Controllers/bucketsController")

const router = express.Router()

router
    .route("/")
    .get(GetBuckets)

module.exports = router