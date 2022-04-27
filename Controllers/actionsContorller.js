
const Action = require("../model/ActionModel")
const APIFeatures = require("../utils/apiFeatures")


exports.GetAllActions = async (req, res) => {

    const features = new APIFeatures(Action.find(), req.query)
        .filter()
        .limitFields()
    let actions = await features.query

    try {
        res.status(200).send(actions)
    }
    catch (err) {
        res.status(400).json({
            status: "Fail",
            message: err
        })
    }
}

exports.CreateNewAction = async (req, res) => {
    try {
        const newAction = await Action.create(req.body)
        res.status(201).json({
            status: "Success",
            data: {
                newAction
            }
        })
    }
    catch (err) {
        res.status(400).json({
            status: "Fail",
            message: err
        })
    }
}

exports.DeleteAction = async (req, res) => {
    try {
        await Action.findByIdAndDelete(req.params.id)
        res.status(204).json({
            status: "Success",
            data: null
        })
    }
    catch (err) {
        console.log(`there has been an error deleting the file. error: ${err}`)
        res.status(404).json({
            status: "Fail",
            message: err
        })
    }
}

exports.GetAction = async (req, res) => {
    try {
        const action = await Action.findById(req.params.id)
        res.status(200).json({
            status: "Success",
            data: {
                action
            }
        })
    }
    catch (err) {
        res.status(404).json({
            status: "Fail",
            message: "File not found",
            error: err
        })
    }
}


exports.CompleteAction = async (req, res) => {
    const { id, taskId } = req.params
    const {completedOn, completedBy} = req.body
    try {
        const action = await Action.findOneAndUpdate( {_id: id, "tasks._id": taskId }, {"tasks.$.completedOn": completedOn, "tasks.$.completedBy": completedBy }, {
            new: true,
            runValidators: true
        })
        res.status(200).json({
            status: "Success",
            Data: {
                action
            }
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json({
            status: "Fail",
            message: "Action not found",
            error: err
        })
    }
}

exports.DeleteTask = async (req, res) => {
    const { id, taskId } = req.params
    try{
        const action = await Action.updateOne({ "_id": id }, {$pull:{"tasks": {"_id": taskId}}})
        res.status(200).send("action removed");
    }
    catch(err){
        res.status(404).json({
            status: "fail",
            messsage: err
        })
    }
}
