const Category = require("../models/Category")
const Product = require("../models/Product")
const qr = require('qrcode');
const JsBarcode = require('jsbarcode');
const { createCanvas } = require("canvas")

exports.createProduct = async (req, res, next) => {
  try {
    const new_product = new Product({
      ...req.body
    })

    // const standardWidth = 2;
    // const standardHeight = 100

    // const canvas = createCanvas(standardWidth * new_product._id.length, standardHeight);
    // const ctx = canvas.getContext('2d');

    // JsBarcode(canvas, new_product._id, {
    //   format: 'CODE128',
    //   displayValue: true,
    //   width: standardWidth,
    //   height: standardHeight,
    // })

    // new_product.barCode = canvas.toDataURL('image/png')

    // const product = await new_product.save()

    // res.status(200).json({
    //   success: true,
    //   status: 200,
    //   message: 'Product created successfully.',
    //   data: product
    // })


    qr.toDataURL(new_product._id.toString(), { type: 'image/png', errorCorrectionLevel: 'H', size: 300 }, async (err, url) => {
      if (err) {
        return res.status(500).json({
          success: false,
          status: 500,
          message: 'Error generating QR code'
        })

      } else {
        new_product.barCode = url
        const product = await new_product.save()

        res.status(200).json({
          success: true,
          status: 200,
          message: 'Product created successfully.',
          data: product
        })
      }
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      status: 500,
      message: err.message
    })
  }
}


exports.updateProduct = async (req, res, next) => {

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        category: req.body.category,
        price: req.body.price,
        quantity: req.body.quantity
      }
    },
      { new: true }
    )

    res.status(200).json({
      success: true,
      status: 200,
      message: 'Product updated successfully.',
      data: product
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      status: 500,
      message: err.message
    })
  }
}


exports.deleteProduct = async (req, res, next) => {

  try {
    await Product.findByIdAndDelete(req.params.id)

    res.status(200).json({
      success: true,
      status: 200,
      message: 'Product deleted successfully.',
      data: {}
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      status: 500,
      message: err.message
    })
  }
}

exports.getProduct = async (req, res, next) => {

  try {
    const product = await Product.findOne({ _id: req.params.id })
    res.status(200).json({
      success: true,
      status: 200,
      message: 'Product retrieved successfully.',
      data: product
    })

  } catch (err) {
    res.status(500).json({
      success: false,
      status: 500,
      message: err.message
    })
  }
}

exports.getProducts = async (req, res, next) => {

  try {

    const products = await Product.find({user : req.user})
      .populate('category', 'name')

    res.status(200).json({
      success: true,
      status: 200,
      message: 'Products retrieved successfully.',
      data: products
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      status: 500,
      message: err.message
    })
  }
}


exports.getProductsBySearch = async (req, res, next) => {

  try {
    const keyword = req.query.q
      ? {
        $or: [
          { name: { $regex: req.query.q, $options: "i" } },
          { email: { $regex: req.query.q, $options: "i" } },
        ],
        user : req.user
      }
      : {user : req.user}
    const products = await Product.find(keyword).limit(5)

    res.status(200).json({
      success: true,
      status: 200,
      message: 'Products retrieved successfully.',
      data: products
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      status: 500,
      message: err.message
    })
  }
}
