const Attendance = require("../models/Attendance")
const Employee = require("../models/Employee")
const today = require("../utils/today")

exports.createAttendance = async (req, res, next) => {
    try {

        const employee = await Employee.findById(req.params.id)

        if(!employee){
            res.status(200).json({
                success: true,
                status: 200,
                message: 'Wrong QR user ID.Not match this system.Please contact Administration',
                code : 'Not Found',
                data: {}
            })
        }

        if(employee.status === 'Closed'){
            return res.status(200).json({
                success: true,
                status: 200,
                message: 'Employee is Closed from work.',
                code : 'Closed',
                data: employee
            })
        }

        const findAttendance = await Attendance.find({
            employee: req.params.id,
            date: {
                $gt : today('gt'),
                $lt : today('lt')
            }
        })
        console.log(findAttendance)

        // if (findAttendance.lenth > 0) {
        //     return res.status(200).json({
        //         success: true,
        //         status: 200,
        //         message: 'Attendance already Done.',
        //         code : 'Already Done',
        //         data: {}
        //     })
        // }else{
        //     const new_Attendance = new Attendance({
        //         status : 'present',
        //         employee : req.params.id
        //     })
        //     await new_Attendance.save()
        //     res.status(200).json({
        //         success: true,
        //         status: 200,
        //         message: 'Attendance Confirmed.',
        //         code : 'Done',
        //         data: employee
        //     })
        // }

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