const padStart = require("./padStart")

const today = (inputDate,query) => {
    const date = inputDate ? new Date(inputDate) : new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    
    if(query === 'gt'){
        return `${year}-${padStart(month + 1)}-${padStart(day)}T00:00:00.000Z`
    }else if(query === 'lt'){
        return `${year}-${padStart(month + 1)}-${padStart(day)}T23:59:59.999Z`
    }else if(query === 'cu'){
        return `${year}-${padStart(month +1)}-${padStart(day)}T${padStart(hours)}:${padStart(minutes)}:${padStart(seconds)}.${padStart(milliseconds, 3)}Z`
    }
}

module.exports = today