const fs = require("fs")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const Action = require("../model/ActionModel")

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE


mongoose.connect(DB, {}).then(con => {
    console.log(con.connections)
    console.log("This is connected")
})

const tours = JSON.parse(fs.readFileSync(`${__dirname}/mockData.json`, "utf-8"))

const importData = async () => {
    try {
        await Action.create(tours)
        console.log("Data Loaded")
    }
    catch (err) {
        console.log(err)
    }
    process.exit()
}

const deleteData = async () => {
    try {
        await Action.deleteMany()
        console.log("Data deleted")
        process.exit()
    }
    catch (err) {
        console.log(err)
    }
}

if (process.argv[2] === "--import") {
    importData()
}
if (process.argv[2] === "--delete") {
    deleteData()
}

console.log(process.argv)