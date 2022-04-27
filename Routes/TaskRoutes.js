const express = require("express")
const { DeleteTask } = require("../Controllers/actionsContorller")

const router = express.Router()

router
    .route("/:id/:taskId")
    .patch(DeleteTask)

module.exports = router