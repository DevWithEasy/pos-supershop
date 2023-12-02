const premiumCustomer = require('./sheduleTask/premiumCustomer')
const autoAttendance = require('./sheduleTask/autoAttendance')
const dailyReport = require('./sheduleTask/dailyReport')


const sheduleTask = () => {

    premiumCustomer()

    autoAttendance()

    // dailyReport()

}

module.exports = sheduleTask