const mongoose = require('mongoose')

const attendanceSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Types.ObjectId,
        ref: 'Employee'
    },
    date: {
        type: Date,
        required: true,
        default : Date.now()
    },
    status: {
        type: String,
        enum: ['P', 'A', 'L','H']
    },
}, { timestamps: true })

const Attendance = mongoose.model('Attendance', attendanceSchema)

module.exports = Attendance