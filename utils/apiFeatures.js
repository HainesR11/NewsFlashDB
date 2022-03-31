class APIFeatures {
    constructor(query, queryStr) {
        this.query = query
        this.queryStr = queryStr
    }

    filter() {
        const queryObject = { ...this.queryStr }
        const excludedFields = ["page", "sort", "limit", "fields"]
        excludedFields.forEach(el => delete queryObject[el])

        //Advanced Filtering 
        let queryString = JSON.stringify(queryObject)
        queryString = queryString.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`)

        this.query = this.query.find(JSON.parse(queryString))
        // let query = Action.find(JSON.parse(queryStr))
        return this
    }
    sort() {
        // Sorting 
        if (this.queryStr.sort) {
            const sortBy = req.query.sort.split(",").join(" ")
            this.query = this.query.sort(sortBy)
        } else {
            this.query.sort('-dueDate')
        }
        return this
    }
    limitFields() {
        //Field Limiting
        if (this.queryStr.fields) {
            const fields = this.queryStr.fields.split(',').join(' ')
            this.query = this.query.select(fields)
        } else {
            this.query = this.query.select('-__v')
        }
        return this
    }
}
module.exports = APIFeatures