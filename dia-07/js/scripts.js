var day = document.getElementById('days')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let seconds = document.getElementById('seconds')
let timer = document.getElementById('tempo')

const date = () => {

    var dateLimit = new Date("dec 20, 2022 20:00:00").getTime()
    var now = new Date().getTime()
    var differenceDateLimitAndNow = dateLimit - now
    var numberZero;
    
    
    var daysTime = Math.floor(differenceDateLimitAndNow / (1000 * 60 * 60 * 24))
    var hoursTime = Math.floor((differenceDateLimitAndNow % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutesTime = Math.floor((differenceDateLimitAndNow % (1000 * 60 * 60)) / (1000 * 60))
    var secondsTime = Math.floor((differenceDateLimitAndNow % (1000 * 60)) / (1000))
    
    if (daysTime < 10) {
        daysTime = '0' + daysTime
    }

    if (hoursTime < 10) {
        hoursTime = '0' + hoursTime
    }
    
    if (minutesTime < 10) {
        minutesTime = '0' + minutesTime
    }
    
    if (secondsTime < 10) {
        secondsTime = '0' + secondsTime
    }

    day.innerHTML = ``
    hours.innerHTML = ``
    minutes.innerHTML = ``
    seconds.innerHTML = ``

    if (daysTime < 10) {
        numberZero = 0
    }
    timer.innerHTML = `${daysTime} : ${hoursTime} : ${minutesTime} : ${secondsTime}`
}

const semTimer = () => {
    day.innerHTML = ``
    hours.innerHTML = ``
    minutes.innerHTML = ``
    seconds.innerHTML = ``
}

setTimeout(semTimer, 0)
setInterval(date, 1000)


