let text = document.querySelector('.text')
let datetime = document.querySelector('.datetime')
const btn = document.querySelector('.btn')
const schedule = require('node-schedule')

let date = new Date(`${datetime.value}:00.000+6:00`)

btn.addEventListener('click', (e) => {
    e.preventDefault()
    schedule.scheduleJob(date, () => {
        alert(text.value)  
        schedule.cancelJob()
    })
})    