const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
    user : {
        type : mongoose.Types.ObjectId,
        ref : 'User'
    },
    reportType : {
        type : String,
        enum : ['daily','monthly'],
        required : true
    },
    from : {
        type : Date,
        required : true
    },
    to : {
        type : Date,
        required : true
    },
    year : {
        type : String,
        required : true
    },
    month : {
        type : String,
        required : true
    }, 
    purchase : {
        type : Number,
        required : true
    },
    sale : {
        type : Number,
        required : true
    }

},{timestamps : true})

const Report = mongoose.model('Report', reportSchema)

module.exports = Report