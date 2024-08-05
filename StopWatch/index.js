const clock = document.querySelector(".watch");
let milliseconds = 0;
let interval = null;

function timer(){
    milliseconds += 10;

    let hrs = Math.floor(milliseconds / 3600000);
    let mins = Math.floor((milliseconds - (hrs * 3600000)) / 60000);
    let secs = Math.floor((milliseconds - (hrs * 3600000) - (mins * 60000)) / 1000);
    let ms = milliseconds % 1000;

    if (secs < 10) {
        secs = "0" + secs;
    }

    if (mins < 10){
        mins = "0" + mins;
    }
    
    if (hrs < 10){
        hrs = "0" + hrs;
    }

    if(ms < 10){
        ms = "00" + ms;
    }

    else if(ms < 100){
        ms = "0" + ms;
    }

    clock.innerText = `${hrs} : ${mins} : ${secs} : ${ms}`;
}

function start() {
    if (interval) {
        return
    }

    interval = setInterval(timer, 10);
}

function pause() {
    clearInterval(interval);
    interval = null ;
}

function reset() {
    pause();
    milliseconds = 0;
    clock.innerText = "00 : 00 : 00 : 000";
}