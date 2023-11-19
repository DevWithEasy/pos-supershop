const today = (date, query) => {

    const currentDate = date ? new Date(date) : new Date();

    if (query === 'start') {
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0, 0);
    } else if (query === 'end') {
        return new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 23, 59, 59, 999);
    }
}

module.exports = today