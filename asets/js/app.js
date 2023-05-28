

let cl = console.log;

function doubleDigit(num) {
    if (num < 10) {
        return num = "0" + num;
    }
    else {
        return num
    }
}


function createDigitalClock() {
    const digiClock = document.getElementById("digiClock")
    let d = new Date();

    let hr = d.getHours();
    let min = d.getMinutes();
    let sec = d.getSeconds();
    let session = "AM";
    if (hr > 12) {
        session = "PM"
        hr = hr - 12;
    }
    // ============================================
    //usig if condition for making double digit
    // if(hr<10){
    //     hr = "0" + hr;
    // }

    // if(min<10){
    //     min = "0" + min;
    // }
    // if(sec<10){
    //     sec = "0" + sec;
    // }

    // ============================================
    //ternery condition for making double igit
    // (hr<10) ? (hr = "0"+ hr) : hr = hr
    // (min<10) ? (min = "0"+ min) : min = min
    // (sec<10) ? (sec = "0"+ sec) : sec = sec

    // ============================================
    // making double digit using function

    // hr = doubleDigit(hr)
    // min = doubleDigit(min)
    // sec = doubleDigit(sec)

    // ============================================
    // result using direct function in output

    let time =`${doubleDigit(hr)} : ${doubleDigit(min)} : ${doubleDigit(sec)}   ${session}`
    // let time = `${hr}:${min}:${sec} ${session}`


    digiClock.innerHTML = time;
    setTimeout(createDigitalClock, 1000)
}

createDigitalClock();


