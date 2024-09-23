const countdownDateinput = document.getElementById("countdown-date");
const countdownTimeinput = document.getElementById("countdown-time");
const countdownDisplay = document.querySelector(".countdown");

const timer = () => {
    // Specify the date and time we are counting down to.

    const countDate = new Date(countdownDateinput.value).getTime();
    const now = new Date().getTime();
    const remainingTime = countDate - now;

    
    const congratsMessage = document.getElementById("congrats-message");
    congratsMessage.innerText = "";
    congratsMessage.classList.remove("animate");
        
    if (remainingTime <= 0 ){
        congratsMessage.innerText = "Time Up! Congratulations";
        congratsMessage.classList.add("animate");
    } 

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);

    document.querySelector(".day").innerText = textDay > 0 ? textDay : 0;
    document.querySelector(".hour").innerText = textHour > 0 ? textHour : 0;
    document.querySelector(".minute").innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector(".second").innerText = textSecond > 0 ? textSecond : 0;
};

// should use 1000 as setInterval won't always run on time.
setInterval(timer, 1000);



