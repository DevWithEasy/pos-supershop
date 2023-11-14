const { createAttendance, getAttendanceUpdate, attendanceClosed, updateAttendance } = require('../controllers/attendaceControllers')
const verifyToken = require('../utils/verifyToken')
const router = require('express').Router()

router.post('/create/:id',verifyToken,createAttendance)
    .post('/closed', verifyToken, attendanceClosed)
    .get('/update', verifyToken,getAttendanceUpdate)
    .put('/update', verifyToken,updateAttendance)
    .put('/update/:id', verifyToken)
    .delete('/delete/:id', verifyToken)
    .get('/:phone', verifyToken)
    .get('/',)

module.exports = router