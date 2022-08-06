const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Pokemon = new Schema({
    name: { type: String },
    type: { type: String },
    image: {
        type: String,
        default:
            'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/2015/Tin-Tuc/pokeball.jpg',
    },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Pokemon', Pokemon)
