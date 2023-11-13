const Attendance = require("../models/Attendance")
const Employee = require("../models/Employee")
const today = require("../utils/today")
const todayDayName = require("../utils/todayDayName")
const moment = require('moment-timezone');

exports.createAttendance = async (req, res, next) => {
    try {

        const {status} = req.query

        if(!status){
            return res.status(500).json({
                success: false,
                status: 500,
                message: 'Plase send query.'
            })
        }

        const employee = await Employee.findById(req.params.id).populate('user')

        if(!employee){
            return res.status(200).json({
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
                $gt : today('','gt'),
                $lt : today('','lt')
            }
        })

        if (findAttendance.length > 0) {
            return res.status(200).json({
                success: true,
                status: 200,
                message: 'Attendance already Done.',
                code : 'Already Done',
                data: employee
            })
        }else{
            const new_Attendance = new Attendance({
                status : status,
                employee : req.params.id
            })

            await new_Attendance.save()

            res.status(200).json({
                success: true,
                status: 200,
                message: 'Attendance Confirmed.',
                code : 'Done',
                data: employee
            })
        }

    } catch (err) {
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

exports.attendanceClosed = async (req, res, next) => {
    try {
        const day = todayDayName()

        const employees = await Employee.find({user : req.user})

        employees.forEach(async (employee) =>{
            const findAttendance = await Attendance.find({
                employee: employee._id,
                date: {
                    $gt : today('','gt'),
                    $lt : today('','lt')
                }
            })
            const localTime = today('','');
            if (findAttendance.length > 0) {
                return 
            }else{
                const new_Attendance = new Attendance({
                    date : localTime,
                    status : day === 'Friday' ? 'H' : 'A',
                    employee : employee._id
                })
    
                await new_Attendance.save()

            }
        })

        res.status(200).json({
            success: true,
            status: 200,
            message: 'Today attendance closed.',
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

exports.getAttendanceUpdate = async (req, res, next) => {
    try {
        const employees = await Employee.find({user : req.user})

        let data = []

        employees.forEach(employee=>{

        })
        console.log(req.query.date)

        // res.status(200).json({
        //     success: true,
        //     status: 200,
        //     message: '',
        //     data: {}
        // })
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