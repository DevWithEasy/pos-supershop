const Employee = require("../models/Employee")
const createError = require("../utils/createError")
const qr = require('qrcode');
const fs = require('fs');
const today = require("../utils/today");
const Attendance = require("../models/Attendance");
const padStart = require("../utils/padStart");

exports.createEmployee = async (req, res, next) => {
    try {
        if (!req.file) {
            return createError(400, 'File not Found.')
        }
        const employees = await Employee.countDocuments()

        const new_employee = new Employee({
            ...req.body,
            image: req.file.filename,
            user: req.user,
            IDNo: employees + 1
        })

        qr.toDataURL(new_employee._id.toString(), { type: 'image/png', errorCorrectionLevel: 'H', size: 300 }, async (err, url) => {
            if (err) {
                fs.unlink(`public/image/${req.file.filename}`, (err) => {
                    if (err) return
                })
                return res.status(500).json({
                    success: false,
                    status: 500,
                    message: 'Error generating QR code'
                })

            } else {

                new_employee.barCode = url
                const employee = await new_employee.save()

                const date = new Date(req.body.joinDate)

                for (let i = 1; i < date.getDate(); i++) {

                    const dateString = new Date(date.getFullYear(),padStart(date.getMonth()),padStart(i),0,0,0,1)

                    const new_Attendance = new Attendance({
                        date : dateString,
                        status: 'A',
                        employee: new_employee._id
                    })
                    new_Attendance.save()
                }

                res.status(200).json({
                    success: true,
                    status: 200,
                    message: 'Employee create successfully.',
                    data: employee
                })
            }
        })


    } catch (err) {
        fs.unlink(`public/image/${req.file.filename}`,(err)=>{
            if(err) return
        })
        
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

exports.getAllEmployee = async (req, res, next) => {
    try {
        const employees = await Employee.find({}).populate('user', 'name address')
        res.status(200).json({
            success: true,
            status: 200,
            message: '',
            data: employees
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

exports.getAllEmployeeAdttendance = async (req, res, next) => {
    try {
        const employees = await Employee.find({ user: req.user }).populate('user', 'name address')
        res.status(200).json({
            success: true,
            status: 200,
            message: '',
            data: employees
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

exports.employeeUpdate = async (req, res, next) => {
    try {

        await Employee.findByIdAndUpdate(req.params.id, {
            $set :{
                name : req.body.name,
                phone : req.body.phone,
                nid : req.body.nid,
                address : req.body.address,
                salary : req.body.salary,
                designation : req.body.designation
            }
        })

        const employees = await Employee.find({user : req.body.user._id})

        res.status(200).json({
            success: true,
            status: 200,
            message: 'Employee Updated Successfuly.',
            data: employees
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

exports.employeeDelete = async (req, res, next) => {
    try {
        const employee = await Employee.findById(req.params.id)

        await Employee.findByIdAndDelete(req.params.id)

        fs.unlink(`public/image/${employee.image}`, (err) => {
            if (err) return
        })
        await Attendance.deleteMany({ employee : req.params.id})

        res.status(200).json({
            success: true,
            status: 200,
            message: 'Employee deleted successfully.',
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