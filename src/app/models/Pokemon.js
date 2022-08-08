const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const Schema = mongoose.Schema

const Pokemon = new Schema(
    {
        _id: { type: Number },
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
        deletedAt: { type: Date },
    },
    {
        _id: false,
        timestamps: true,
    }
)

// Add plugins
mongoose.plugin(slug)
Pokemon.plugin(mongooseDelete, { overrideMethods: 'all' })
Pokemon.plugin(AutoIncrement)

module.exports = mongoose.model('Pokemon', Pokemon)
