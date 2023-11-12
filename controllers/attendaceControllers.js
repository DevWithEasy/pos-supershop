const Employee = require("../models/Employee")

exports.createCustomer = async (req, res, next) => {
    try {
        const new_employee = new Employee({
            ...req.body
        })
        const employee = await new_employee.save()
        res.status(200).json({
            success: true,
            status: 200,
            message: '',
            data: employee
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

exports.controller = async (req, res, next) => {
    try {
        
        res.status(200).json({
            success: true,
            status: 200,
            message: '',
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