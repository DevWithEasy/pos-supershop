const Company = require("../models/Category")

exports.createCategory=async(req,res,next)=>{
  
    try{
      const new_category = new Company({
        ...req.body
      })

      const company = await new_category.save()

      res.status(200).json({
          success : true,
          status : 200,
          message : 'Company created successfully',
          data : company
      })
    }catch(err){
      res.status(500).json({
          success : false,
          status : 500,
          message : err.message
      })
    }
}

exports.updateCategory=async(req,res,next)=>{
  
  try{
    const company = await Company.findByIdAndUpdate(req.params.id,{
      $set : {
        name: req.body.name
      }
    },
    {new  : true}
    )

    res.status(200).json({
        success : true,
        status : 200,
        message : 'Company updated successfully',
        data : company
    })

  }catch(err){
    res.status(500).json({
        success : false,
        status : 500,
        message : err.message
    })
  }
}

exports.deleteCategory=async(req,res,next)=>{
  
  try{
    await Company.findByIdAndDelete(req.params.id)
    
    res.status(200).json({
        success : true,
        status : 200,
        message : 'Company deleted successfully',
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

exports.getAllCategory=async(req,res,next)=>{
  
  try{
    const companies = await Company.find({})
    res.status(200).json({
        success : true,
        status : 200,
        message : 'Brands retrieved successfully',
        data : companies
    })
  }catch(err){
    res.status(500).json({
        success : false,
        status : 500,
        message : err.message
    })
  }
}
