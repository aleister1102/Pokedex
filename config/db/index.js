const mongoose = require('mongoose')
const MONGODB_URI = process.env.MONGODB_URI

async function connect() {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connect successfully!')
    } catch (error) {
        console.log(`Connect failed: ${error}!!!`)
    }
}

module.exports = { connect }
