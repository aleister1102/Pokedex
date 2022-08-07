const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
mongoose.plugin(slug)

const Schema = mongoose.Schema

const Pokemon = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String },
        image: {
            type: String,
            default:
                'https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/2015/Tin-Tuc/pokeball.jpg',
        },
        description: {
            type: String,
        },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    }
)

module.exports = mongoose.model('Pokemon', Pokemon)
