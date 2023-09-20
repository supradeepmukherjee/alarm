alarmSubmit = document.getElementById('alarmSubmit')
alarmSubmit.addEventListener('click', setAlarm)
audio = new Audio('Alarm.mp3');

// This function will run whenever alarm is set from the UI
function setAlarm(e) {
    e.preventDefault()
    alarm = document.getElementById('alarm')
    alarmDate = new Date(alarm.value)
    now = new Date()
    ring = alarmDate - now
    if (ring >= 0) {
        setTimeout(() => {
            audio.play()
        }, ring);
    }
}