const Invoice = require("../models/Invoice")
const Purchase = require("../models/Purchase")
const Report = require("../models/Report")
const month = require("../utils/month")

exports.generateReport=async(req,res,next)=>{
    try{

        const start = month(req.body.start,req.body.end,'start')
        const end = month(req.body.start,req.body.end,'end')
    
        const purchases = await Purchase.aggregate([
            {
                $match: {
                    createdAt: {
                    $gte: start,
                    $lte: end,
                    },
                },
            },
            {
                $group : {
                    _id : null,
                    value : {
                        $sum : '$total'
                    }
                }
            }
        ])

        const invoices = await Invoice.aggregate([
            {
                $match: {
                    createdAt: {
                    $gte: start,
                    $lte: end,
                },
                },
            },
            {
                $group : {
                    _id : null,
                    value : {
                        $sum : '$paid'
                    }
                }
            }
        ])

        res.status(200).json({
            success : true,
            status : 200,
            message : 'Report successfully generated',
            data : {
                purchase : purchases[0],
                invoice : invoices[0]
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

exports.createReport=async(req,res,next)=>{
    try{

        const new_report = new Report({
            ...req.body
        })

        await new_report.save()

        res.status(200).json({
            success : true,
            status : 200,
            message : 'Report successfully created.',
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

exports.getAllReport=async(req,res,next)=>{
    try{

        const reports = await Report.find({}).sort({
            createdAt : 1
        })

        res.status(200).json({
            success : true,
            status : 200,
            message : 'Report successfully retrived.',
            data : reports
        })
    }catch(err){
        res.status(500).json({
            success : false,
            status : 500,
            message : err.message
        })
    }
}

exports.deleteReport=async(req,res,next)=>{

    try{
        await Report.findByIdAndDelete(req.params.id)

        res.status(200).json({
            success : true,
            status : 200,
            message : 'Report deleted successfully.',
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