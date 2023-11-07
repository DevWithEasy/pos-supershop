const Category = require("../models/Category")
const Product = require("../models/Product")
const jsbarcode = require("jsbarcode")
const {createCanvas} = require("canvas")

exports.createProduct=async(req,res,next)=>{
    try{
      const new_product = new Product({
        ...req.body
      })

      const canvas = createCanvas(300, 100);

      jsbarcode(canvas, new_product._id, {
        format: 'CODE128',
        displayValue: true,
      });

      new_product.barCode = canvas.toDataURL('image/png')

      const product = await new_product.save()
      
      res.status(200).json({
          success : true,
          status : 200,
          message : 'Product created successfully.',
          data : product
      })
    }catch(err){
      res.status(500).json({
          success : false,
          status : 500,
          message : err.message
      })
    }
}


exports.updateProduct=async(req,res,next)=>{
  
  try{
    const product = await Product.findByIdAndUpdate(req.params.id,{
      $set : {
        name : req.body.name,
        category : req.body.category,
        price : req.body.price,
        quantity : req.body.quantity
      }
    },
    {new : true}
    )

    res.status(200).json({
        success : true,
        status : 200,
        message : 'Product updated successfully.',
        data : product
    })
  }catch(err){
    res.status(500).json({
        success : false,
        status : 500,
        message : err.message
    })
  }
}


exports.deleteProduct=async(req,res,next)=>{
  
  try{
    await Product.findByIdAndDelete(req.params.id)

    res.status(200).json({
        success : true,
        status : 200,
        message : 'Product deleted successfully.',
        data : {}
    })
  }catch(err){
    res.status(500).json({
        success : false,
        status : 500,
        message : err.message
    })
  }
}

exports.getProduct=async(req,res,next)=>{
  
  try{
    const product = await Product.findById(req.params.id)

    res.status(200).json({
        success : true,
        status : 200,
        message : 'Product retrieved successfully.',
        data : product
    })

  }catch(err){
    res.status(500).json({
        success : false,
        status : 500,
        message : err.message
    })
  }
}

exports.getProducts=async(req,res,next)=>{
  
  try{

    const products = await Product.find({})
    .populate('category' , 'name')

    res.status(200).json({
        success : true,
        status : 200,
        message : 'Products retrieved successfully.',
        data : products
    })
  }catch(err){
    res.status(500).json({
        success : false,
        status : 500,
        message : err.message
    })
  }
}


exports.getProductsByGeneric=async(req,res,next)=>{
  
  try{
    const products = await Product.find({
      category : req.param.id
    })

    res.status(200).json({
        success : true,
        status : 200,
        message : 'Products retrieved successfully.',
        data : products
    })
  }catch(err){
    res.status(500).json({
        success : false,
        status : 500,
        message : err.message
    })
  }
}

exports.getProductsBySearch=async(req,res,next)=>{
  
  try{
    const keyword = req.query.q
        ? {
            $or: [
              { name: { $regex: req.query.q, $options: "i" }},
              { email: { $regex: req.query.q, $options: "i" }},
            ],
          }
        :{}
    const products = await Product.find(keyword).limit(5)

    res.status(200).json({
        success : true,
        status : 200,
        message : 'Products retrieved successfully.',
        data : products
    })
  }catch(err){
    res.status(500).json({
        success : false,
        status : 500,
        message : err.message
    })
  }
}

exports.findGenericBrand=async(req,res,next)=>{
  
  try{
    const generics = await Generic.find({})
    const companies = await Category.find({})

    res.status(200).json({
        success : true,
        status : 200,
        message : 'Products retrieved successfully.',
        data : {
          generics,
          companies
        }
    })
  }catch(err){
    res.status(500).json({
        success : false,
        status : 500,
        message : err.message
    })
  }
}