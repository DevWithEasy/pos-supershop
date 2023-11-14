const { createAttendance, getAttendanceUpdate, attendanceClosed, updateAttendance } = require('../controllers/attendaceControllers')
const verifyToken = require('../utils/verifyToken')
const router = require('express').Router()

router.post('/create/:id',verifyToken,createAttendance)
    .post('/closed', verifyToken, attendanceClosed)
    .get('/update', verifyToken,getAttendanceUpdate)
    .put('/update', verifyToken,updateAttendance)
    .delete('/delete/:id', verifyToken)
    .get('/monthly', verifyToken)
    .get('/',)

module.exports = router