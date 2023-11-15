const { createAttendance, getAttendanceUpdate, attendanceClosed, updateAttendance, getMonthAttendance } = require('../controllers/attendaceControllers')
const verifyToken = require('../utils/verifyToken')
const router = require('express').Router()

router.post('/create/:id',verifyToken,createAttendance)
    .post('/closed', verifyToken, attendanceClosed)
    .get('/update', verifyToken,getAttendanceUpdate)
    .put('/update', verifyToken,updateAttendance)
    .delete('/delete/:id', verifyToken)
    .post('/monthly', verifyToken,getMonthAttendance)
    .get('/',)

module.exports = router