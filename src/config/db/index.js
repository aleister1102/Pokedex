const mongoose = require('mongoose')
const MONGODB_URI =
    'mongodb+srv://marucube34:p8FecTSGns9e0bSp@cluster0.tvoo6ju.mongodb.net/pokedex_dev?retryWrites=true&w=majority'
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
