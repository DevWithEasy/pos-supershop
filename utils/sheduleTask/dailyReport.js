const Invoice = require("../../models/Invoice")
const Purchase = require("../../models/Purchase")
const User = require("../../models/User")
const today = require("../today")
const cron = require('node-cron')

const dailyReport = () => {

    cron.schedule('00 52 19 * * *', async () => {
        const users = await User.find({ isAdmin: false })

        users.forEach(async(user) => {
            const filter = {
                $match: {
                    user : user._id,
                    createdAt: {
                        $gte: today('', 'start'),
                        $lte: today('', 'end'),
                    },
                }
            }

            const purchases = await Purchase.aggregate([
                filter,
                {
                    $group: {
                        _id: null,
                        value: {
                            $sum: '$total'
                        }
                    }
                }
            ])

            const invoices = await Invoice.aggregate([
                filter,
                {
                    $group: {
                        _id: null,
                        value: {
                            $sum: '$total'
                        }
                    }
                }
            ])

            console.log({
                purchase: purchases[0],
                invoice: invoices[0]
            })
        })

    })
}

module.exports = dailyReport