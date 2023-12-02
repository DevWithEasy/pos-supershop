const cron = require('node-cron')
const Attendance = require('../../models/Attendance')
const Employee = require('../../models/Employee')
const today = require('../today')
const todayDayName = require('../todayDayName')

const autoAttendance = () =>{
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

module.exports = autoAttendance