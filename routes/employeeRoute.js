const { createEmployee, getAllEmployee, employeeUpdate, employeeDelete } = require('../controllers/employeeControllers')
const upload = require('../middlewares/upload')
const verifyToken = require('../utils/verifyToken')
const router = require('express').Router()

router.post('/create', verifyToken,upload.single('image'),createEmployee)
    .put('/update/:id', verifyToken,employeeUpdate)
    .delete('/delete/:id', verifyToken,employeeDelete)
    .get('/:phone', verifyToken)
    .get('/',verifyToken, getAllEmployee)

module.exports = router