const express = require("express")
const { GetAllActions, CreateNewAction, GetAction, DeleteAction, UpdateAction } = require("../Controllers/actionsContorller")

const router = express.Router()

router
    .route("/")
    .get(GetAllActions)
    .post(CreateNewAction)
router
    .route("/id")
    .get(GetAction)
    .delete(DeleteAction)
    .patch(UpdateAction)

module.exports = router