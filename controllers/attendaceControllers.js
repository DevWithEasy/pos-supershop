const Attendance = require("../models/Attendance")
const Employee = require("../models/Employee")
const today = require("../utils/today")
const todayDayName = require("../utils/todayDayName")

exports.createAttendance = async (req, res, next) => {
    try {

        const { status } = req.query

        if (!status) {
            return res.status(500).json({
                success: false,
                status: 500,
                message: 'Plase send query.'
            })
        }

        const employee = await Employee.findById(req.params.id).populate('user')

        if (!employee) {
            return res.status(200).json({
                success: true,
                status: 200,
                message: 'Wrong QR user ID.Not match this system.Please contact Administration',
                code: 'Not Found',
                data: {}
            })
        }

        if (employee.status === 'Closed') {
            return res.status(200).json({
                success: true,
                status: 200,
                message: 'Employee is Closed from work.',
                code: 'Closed',
                data: employee
            })
        }

        const findAttendance = await Attendance.findOne({
            employee: req.params.id,
            date: {
                $gt: today('', 'gt'),
                $lt: today('', 'lt')
            }
        })

        if (findAttendance) {
            return res.status(200).json({
                success: true,
                status: 200,
                message: 'Attendance already Done.',
                code: 'Already Done',
                data: employee
            })
        } else {
            const new_Attendance = new Attendance({
                date: today('', 'cu'),
                status: status,
                employee: req.params.id
            })

            await new_Attendance.save()

            res.status(200).json({
                success: true,
                status: 200,
                message: 'Attendance Confirmed.',
                code: 'Done',
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

        const employees = await Employee.find({ user: req.user })

        employees.forEach(async (employee) => {
            const findAttendance = await Attendance.findOne({
                employee: employee._id,
                date: {
                    $gt: today('', 'gt'),
                    $lt: today('', 'lt')
                }
            })

            if (findAttendance) {
                return
            } else {
                const new_Attendance = new Attendance({
                    date: today('', 'cu'),
                    status: day === 'Friday' ? 'H' : 'A',
                    employee: employee._id
                })

                new_Attendance.save()
            }
        })

        return res.status(200).json({
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
        const employees = await Employee.find({ user: req.user }).select('name IDNo')

        const data = await Promise.all(employees.map(async (employee) => {
            const findAttendance = await Attendance.findOne({
                employee: employee._id,
                date: {
                    $gt: today(req.query.date, 'gt'),
                    $lt: today(req.query.date, 'lt')
                }
            }).select('status')

            return { ...employee._doc, attendance: findAttendance ? findAttendance._doc : null }

        }))

        res.status(200).json({
            success: true,
            status: 200,
            message: '',
            data: data
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        });
    }
};


exports.updateAttendance = async (req, res, next) => {
    console.log(req.query)
    try {

        const findAttendance = await Attendance.findOne({
            employee: req.query.employee,
            date: {
                $gt: today(req.query.date, 'gt'),
                $lt: today(req.query.date, 'lt')
            }
        })

        if (!findAttendance) {
            return res.status(404).json({
                success: false,
                status: 500,
                message: 'Attendance not found.'
            })
        } else {
            const attendance = await Attendance.findByIdAndUpdate(req.query.attendance, {
                $set: {
                    status: req.query.status
                }
            },
                {
                    new: true
                }
            )
            res.status(200).json({
                success: true,
                status: 200,
                message: 'Attendance updated.',
                data: attendance
            })
        }


    } catch (err) {
        return res.status(500).json({
            success: false,
            status: 500,
            message: err.message
        })
    }
}

exports.getMonthAttendance = async (req, res, next) => {
    try {
        const query = {
            employee : req.body.id,
            date : {
                $gt : today(req.body.start,'gt'),
                $lt : today(req.body.end,'lt')
            }
        }

        const attendances = await Attendance.find(query).select('date status').sort({createdAt : -1})

        res.status(200).json({
            success: true,
            status: 200,
            message: '',
            data: attendances
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