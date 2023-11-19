const { createProduct, getProducts, updateProduct, deleteProduct, getProductsBySearch, getProduct } = require('../controllers/productControllers')
const verifyToken = require('../utils/verifyToken')
const router = require('express').Router()

router.post('/create', verifyToken, createProduct)
      .put('/update/:id', verifyToken, updateProduct)
      .delete('/delete/:id', verifyToken, deleteProduct)
      .get('/find/:id',getProduct)
      .get('/',verifyToken,getProducts)
      .get('/search',verifyToken, getProductsBySearch)

module.exports = router