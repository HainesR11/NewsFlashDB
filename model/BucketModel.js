const mongoose = require("mongoose")

const BucketSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

const Bucket = mongoose.model('Bucket', BucketSchema)

module.exports = Bucket