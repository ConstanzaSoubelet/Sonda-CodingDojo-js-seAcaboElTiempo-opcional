function getSecondsSinceStartOfDay() {
    const now = new Date();
    return now.getSeconds() + now.getMinutes() * 60 + now.getHours() * 3600;
}

setInterval(function () {
    var time = getSecondsSinceStartOfDay();
    var secondsHand = document.getElementById("seconds");
    var minutesHand = document.getElementById("minutes");
    var hourHand = document.getElementById("hour");

    var secondsDeg = (time % 60) * 6; // 360° en una hora dividido por 60 segundos
    var minutesDeg = ((time / 60) % 60) * 6; // 360° en una hora dividido por 60 minutos
    var hourDeg = ((time / 3600) % 12) * 30; // 360° en una esfera dividida en 12 horas

    secondsHand.style.transform = `rotate(${secondsDeg}deg)`;
    minutesHand.style.transform = `rotate(${minutesDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}, 1000);
