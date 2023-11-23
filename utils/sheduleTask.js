const cron = require('node-cron')
const Invoice = require('../models/Invoice')
const Customer = require('../models/Customer')
const today = require('./today')
const Attendance = require('../models/Attendance')
const Employee = require('../models/Employee')
const todayDayName = require('./todayDayName')
const padStart = require('./padStart')

const sheduleTask = () => {

    const date = new Date()
    const startYear = date.getFullYear()
    const startMonth = String(date.getMonth() + 1).padStart(2, '0')
    const startDate = String(date.getDate()).padStart(2, '0')

    const endMonth =
        Number(startMonth) + 1 - 3 === -1 ? 11 :
            Number(startMonth) + 1 - 3 === 0 ? 12 :
                String(Number(startMonth) + 1 - 3).padStart(2, '0')

    let endYear =
        Number(startMonth) + 1 - 3 === 0 ? startYear - 1 :
            Number(startMonth) + 1 - 3 === -1 ? startYear - 1 :
                startYear


    const startCount = new Date(startYear,startMonth,startDate,0,0,0,0)

    const endCount = new Date(endYear,endMonth,padStart(1),23,59,59,999)

    //auto customer status check daily 12 am
    cron.schedule('59 59 23 * * *', async () => {
        const invoices = await Invoice.aggregate([
            {
                $match: {
                    createdAt: {
                        $gte: endCount,
                        $lte: startCount,
                    },
                }
            },
            {
                $group: {
                    _id: '$customer',
                    value: {
                        $sum: '$total'
                    }
                }
            }
        ])
        invoices.forEach(async (invoice) => {
            const customer = await Customer.findById(invoice._id.toHexString())
            if (customer.status === 'Premium') {
                return
            }
            if (invoice.value < 14999) {
                return
            } else {
                await Customer.findByIdAndUpdate(invoice._id.toHexString(), {
                    $set: {
                        status: 'Premium'
                    }
                })
            }
        })
    })

    //auto attendence cloased daily 9 am
    cron.schedule('00 00 09 * * *', async () => {
        const day = todayDayName()

        const employees = await Employee.find({})
        
        employees.forEach(async (employee) => {
            const findAttendance = await Attendance.findOne({
                employee: employee._id,
                date: {
                    $gt: today('', 'start'),
                    $lt: today('', 'end')
                }
            })
            
            if (findAttendance) {
                return
            } else {
                const new_Attendance = new Attendance({
                    status: day === 'Friday' ? 'H' : 'A',
                    employee: employee._id
                })

                new_Attendance.save()
            }
        })
    })

}

module.exports = sheduleTask