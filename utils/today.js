const today = (inputDate,query) => {
    const date = inputDate ? new Date(inputDate) : new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    // const start = `${year}-${String(month + 1).padStart(2, '0')}-${day}`
    // const end = `${year}-${String(month + 1).padStart(2, '0')}-${day}`
    if(query === 'gt'){
        return `${year}-${String(month + 1).padStart(2, '0')}-${day}T00:00:00.000Z`
    }else if(query === 'lt'){
        return `${year}-${String(month + 1).padStart(2, '0')}-${day}T23:59:59.999Z`
    }else if(query === 'cu'){
        return `${year}-${String(month + 1).padStart(2, '0')}-${day}T${String(hours).padStart(2, '0')}:${minutes}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}Z`
    }
}

module.exports = today