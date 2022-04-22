const Bucket = require("../model/BucketModel")

exports.GetBuckets = async (req, res) => {
    try {
        let query = Bucket.find()
        query = query.select('-_id')
        const buckets = await query
        res.status(200).send(buckets)
    }
    catch (err) {
        res.status(400).json({
            status: "Fail",
            message: "error getting buckets",
            error: err
        })
    }
}