const fs = require("fs")
const Action = require("../model/ActionModel")
const APIFeatures = require("../utils/apiFeatures")

// class APIFeatures {
//     constructor(query, queryStr) {
//         this.query = query
//         this.queryStr = queryStr
//     }

//     filter() {
//         const queryObject = { ...this.queryStr }
//         const excludedFields = ["page", "sort", "limit", "fields"]
//         excludedFields.forEach(el => delete queryObject[el])

//         //Advanced Filtering 
//         let queryString = JSON.stringify(queryObject)
//         queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

//         this.query = this.query.find(JSON.parse(queryString))
//         // let query = Action.find(JSON.parse(queryStr))
//         return this
//     }
//     sort() {
//         // Sorting 
//         if (this.queryStr.sort) {
//             const sortBy = req.query.sort.split(",").join(" ")
//             this.query = this.query.sort(sortBy)
//         } else {
//             this.query.sort('-dueDate')
//         }
//         return this
//     }
//     limitFields() {
//         //Field Limiting
//         if (this.queryStr.fields) {
//             const fields = this.queryStr.fields.split(',').join(' ')
//             this.query = this.query.select(fields)
//         } else {
//             this.query = this.query.select('-__v')
//         }
//         return this
//     }
// }

exports.GetAllActions = async (req, res) => {

    const features = new APIFeatures(Action.find(), req.query)
        .filter()
        .sort()
        .limitFields()
    const actions = await features.query

    try {
        res.status(200).json({
            status: "Success",
            results: actions.length,
            Data: {
                actions
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

exports.CreateNewAction = async (req, res) => {
    try {
        const newTour = await Action.create(req.body)
        res.status(201).json({
            status: "Success",
            data: {
                newTour
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
        const action = await Action.find(req.params.id)
        res.status(200).json({
            status: "Success",
            Data: {
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

exports.UpdateAction = async (req, res) => {
    try {
        const action = Action.findByIdAndUpdate(req.params.id, req.body, {
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
        res.status(400).json({
            status: "Fail",
            message: "Action not found",
            error: err
        })
    }
}

exports.getActionStats = async (req, res) => {
    try{
        const stats = await Action
    }
    catch (err) {
        console.log(`there has been an error deleting the file. error: ${err}`)
        res.status(404).json({
            status: "Fail",
            message: err
        })
    }
}