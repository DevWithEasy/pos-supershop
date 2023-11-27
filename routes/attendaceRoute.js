const { createAttendance, getAttendanceUpdate, attendanceClosed, updateAttendance, getMonthAttendance, getMonthlySalary, getMonthAttendanceBook } = require('../controllers/attendaceControllers')
const verifyToken = require('../utils/verifyToken')
const router = require('express').Router()

router.post('/create/:id',verifyToken,createAttendance)
    .post('/closed', verifyToken, attendanceClosed)
    .get('/update', verifyToken,getAttendanceUpdate)
    .put('/update', verifyToken,updateAttendance)
    .delete('/delete/:id', verifyToken)
    .post('/monthly', verifyToken,getMonthAttendance)
    .post('/monthlybook', verifyToken,getMonthAttendanceBook)
    .post('/salary',verifyToken,getMonthlySalary)

module.exports = router