const todayUTC = (inputDate,query) => {
    const date = inputDate ? new Date(inputDate) : new Date()
    // const year = date.getUTCFullYear()
    // const month = date.getUTCMonth()
    // const day = date.getUTCDate()
    // const hours = date.getUTCHours();
    // const minutes = date.getUTCMinutes();
    // const seconds = date.getUTCSeconds();
    // const milliseconds = date.getUTCMilliseconds();
    // const start = `${year}-${String(month + 1).padStart(2, '0')}-${day}`
    // const end = `${year}-${String(month + 1).padStart(2, '0')}-${day}`
    // if(query === 'gt'){
    //     return `${year}-${String(month + 1).padStart(2, '0')}-${day}T00:00:00.000Z`
    // }else if(query === 'lt'){
    //     return `${year}-${String(month + 1).padStart(2, '0')}-${day}T23:59:59.999Z`
    // }else if(query === 'cu'){
    //     return `${year}-${String(month + 1).padStart(2, '0')}-${day}T${String(hours).padStart(2, '0')}:${minutes}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}Z`
    // }
    console.log(date)
    // console.log(year,month,day,hours,minutes,seconds,milliseconds)
    // console.log(`${year}-${String(month + 1).padStart(2, '0')}-${day}T00:00:00.000Z`)
}

module.exports = todayUTC