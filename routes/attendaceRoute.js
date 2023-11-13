const { createAttendance } = require('../controllers/attendaceControllers')
const verifyToken = require('../utils/verifyToken')
const router = require('express').Router()

router.post('/create/:id',verifyToken,createAttendance)
    .put('/update/:id', verifyToken)
    .delete('/delete/:id', verifyToken)
    .get('/:phone', verifyToken)
    .get('/',)

module.exports = router