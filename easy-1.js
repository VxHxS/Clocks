// Вывод показаний часов каждую секунду
setInterval(logClockTime, 1000);

function logClockTime() {
    // Получение строки показания часов в формате гражданского времени
    let time = getClockTime();

    console.clear();
    console.log(time);
}

function getClockTime() {
// получение текущего времени 
let date = new Date();
let time = {};

// Выстраивание последовательности показания часов
 time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: "AM"
};

// Преобразование показания часов в формат гражданского времени
if (time.hours == 12) {
    time.ampm = "PM";
}  else if (time.hours > 12) {
    time.ampm = "PM";
    time.hours -= 12;
}

// Подстановка 0 к показанию часов, чтобы получилась пара цифр
if (time.hours < 10) {
    time.hours = "0" + time.hours;
}

// Подстановка 0 к показанию минут, чтобы получилась пара цифр
if (time.minutes < 10) {
    time.minutes = "0" + time.minutes;
}

// Подстановка 0 к показанию секунд, чтобы получилась пра цифр.

if (time.seconds < 10) {
    time.seconds = "0" + time.seconds;
}

//Придание показаниям часов формата строки "hh:mm:ss tt"
return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
}