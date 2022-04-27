const express = require("express")
const { GetAllActions, CreateNewAction, GetAction, DeleteAction, CompleteAction } = require("../Controllers/actionsContorller")

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

module.exports = router