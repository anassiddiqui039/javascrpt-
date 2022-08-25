function clock() {
    let dateTime = new Date();
    let hours = dateTime.getHours();
    let minutes = dateTime.getMinutes();
    let seconds = dateTime.getSeconds();
    sessions = document.getElementById("sessions");
    if (hours >= 12) {
        sessions.innerHTML = "PM"
    }
    else {
        sessions.innerHTML = "AM"
    }
    if (hours > 12) {
        hours = hours - 12
    }
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}
setInterval(clock, 10)


