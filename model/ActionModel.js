const { ObjectId } = require("mongodb")
const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    taskId: {
        type: ObjectId
    },
    taskName: {
        type: String,
        required: [true, "A task must have a Task Name "],
        trim: true
    },
    taskSummary: {
        type: String,
        trim: true
    },
    assignedTo: [{
        type: String,
        required: [true, "A task must be assigned to someone"],
        trim: true
    }],
    priority: {
        type: String,
        required: [true, "A task must have a set priority"],
        trim: true
    },
    completedBy: {
        type: String,
        trim: true,
        default: undefined
    },
    completedOn: {
        type: Date,
        default: undefined
    }
})

const actionSchema = new mongoose.Schema({
    activityName: {
        type: String,
        unique: true,
        required: [true, 'A activity must have a name'],
        trim: true
    },
    activitySummary: {
        type: String,
        required: [true, "A activity must have a summary"],
        trim: true
    },
    bucket: {
        type: String,
        required: [true, "A activity must have a bucket"],
        trim: true
    },
    startDate: {
        type: Date,
        required: [true, "an activity must have a start date"]
    },
    dueDate: {
        type: Date,
        required: [true, "A activity must have a Due Date"]
    },
    tasks: [taskSchema]

})

const Action = mongoose.model('Action', actionSchema)

module.exports = Action