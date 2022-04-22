const mongoose = require("mongoose")

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
    startDate:{
        type: Date,
        required: [true, "an activity must have a start date"]
    },
    dueDate: {
        type: Date,
        required: [true, "A activity must have a Due Date"]
    },
    tasks: [{
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
            trim: true
        },
        completedOn: {
            type: Date
        }

    }]

})

const Action = mongoose.model('Action', actionSchema)

module.exports = Action