const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    category : {
        type : mongoose.Types.ObjectId,
        ref : 'Category'
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref : 'User'
    },
    price : {
        type : Number,
        required : true
    },
    quantity : {
        type : Number,
        required : true,
        default : 0
    },
    barCode : {
        type : String,
        required : true
    }

},{timestamps : true})

const Product = mongoose.model('Product', productSchema)

module.exports = Product