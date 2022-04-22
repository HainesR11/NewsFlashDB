const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config({ path: './config.env' })
const app = require("./app")

const DB = process.env.DATABASE

mongoose.connect(DB, {}).then(con => {
    console.log(con.connections)
    console.log("Database Successfully connected")
})

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log(`App is running on port - ${port}`);
});
