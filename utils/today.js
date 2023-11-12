const today = (query)=>{
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    const start = `${year}-${String(month + 1).padStart(2, '0')}-${day}`
    const end = `${year}-${String(month + 1).padStart(2, '0')}-${day}`
    if(query === 'gt'){
        return `${year}-${String(month + 1).padStart(2, '0')}-${day}T00:00:00.000Z`
    }else if(query === 'lt'){
        return `${year}-${String(month + 1).padStart(2, '0')}-${day}T23:59:59.999Z`
    }
}

module.exports = today