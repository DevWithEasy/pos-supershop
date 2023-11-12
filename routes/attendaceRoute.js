const verifyToken = require('../utils/verifyToken')
const router = require('express').Router()

router.post('/create', verifyToken)
    .put('/update/:id', verifyToken)
    .delete('/delete/:id', verifyToken)
    .get('/:phone', verifyToken)
    .get('/',)

module.exports = router