class MonthlyAttendanceBook{
    constructor(date,data){
        this.date = date
        this.attendanceData = data
    }
    year(){
        return new Date(this.date).getFullYear()
    }
    month(){
        return new Date(this.date).getMonth()
    }
    days() {
        const date = new Date(this.date)
        return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    }
    daysArray() {
        const days = []
        for (let i = 1; i <= this.days(); i++) {
            days.push(i);

        }
        return days
    }
    findDate(day){
        return `${this.year()}-${String(this.month()+1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
    }
    monthName(){
        const monthNames = [
            'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'
        ];
        return monthNames[this.month()]
    }
    dayName(day){
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const currentday = new Date(this.year(),this.month(),day).getDay()
        return daysOfWeek[currentday]
    }
    daysWithDay(){
        const data = []
        this.daysArray().forEach(day=>{
            data.push({day,name : this.dayName(day)})
        })
        return data
    }
}

export default MonthlyAttendanceBook