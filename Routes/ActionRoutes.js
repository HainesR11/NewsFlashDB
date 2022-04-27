const express = require("express")
const { GetAllActions, CreateNewAction, GetAction, DeleteTask, CompleteAction } = require("../Controllers/actionsContorller")

const router = express.Router()

router
    .route("/")
    .get(GetAllActions)
    .post(CreateNewAction)

router
    .route("/:id")
    .get(GetAction)

router
    .route("/:id/:taskId")
    .patch(CompleteAction)
    .delete(DeleteTask)

module.exports = router