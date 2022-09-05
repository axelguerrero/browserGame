//function for our timer
let timer = 60
function countdown() {
    //if our timers value is greater than 0 we will subtract one over and over
    if (timer > 0) {    
    setTimeout(countdown, 1000)
        timer--
        document.querySelector("#timer").innerHTML = timer
    }

}
countdown()