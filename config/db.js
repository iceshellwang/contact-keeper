const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateInde: true,
            useFindAndModify: false
        })
        console.log("MongoDB Connected...")
    }
    catch (error) {
        console.error(err.message)
        process.exit(1)
    }



}

module.exports = connectDB