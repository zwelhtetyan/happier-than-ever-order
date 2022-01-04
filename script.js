// for typing
const typed = new Typed(".typeLabel", {
    // strings: ["Happier Than Ever By Billie Eilish"],
    stringsElement: "#typed-string",
    smartBackspace: true,
    loop: true,
    loopCount: Infinity,
    typeSpeed: 50,
    backSpeed: 20,
    showCursor: false,
    backDelay: 700,
});

//for order and cancel
const orderContainer = document.querySelector(".order-container");
const cancelContainer = document.querySelector(".cancel-container");

function orderAlert() {
    orderContainer.style.display = "none";
    cancelContainer.style.display = "flex";
    document.querySelector(".order-alert").style.marginTop = 0;
    setTimeout(() => {
        document.querySelector(".order-alert").style.marginTop = "-100%";
    }, 3000);
}

function cancelAlert() {
    orderContainer.style.display = "flex";
    cancelContainer.style.display = "none";
    document.querySelector(".cancel-alert").style.marginTop = 0;
    setTimeout(() => {
        document.querySelector(".cancel-alert").style.marginTop = "-100%";
    }, 3000);
}

document.querySelector(".order").addEventListener("click", orderAlert);
document.querySelector(".cancel").addEventListener("click", cancelAlert);

// for timer
const timer = document.querySelector(".timer");

let hour = 23;
let minute = 59;
let second = 60;
let countTime;

function startTimer() {
    if (hour === 0 && second === 0 && minute == 0) {
        document.querySelector(".cancelButton-and-timer").style.display =
            "none";
        document.querySelector(".you-can-cancel").style.display = "none";
        document.querySelector(".you-order").textContent =
            "Congratulations , you got this item";
        clearInterval(countTime);
        hour = 23;
        minute = 59;
        second = 60;
        return;
    }
    if (second === 0) {
        if (minute === 0) {
            if (hour != 0) {
                minute = 59;
                hour--;
                second = 60;
            }
        } else {
            minute--;
            second = 60;
        }
    }
    second--;
    const secondToShow = second < 10 ? "0" + second.toString() : second;
    const minuteToShow = minute < 10 ? "0" + minute.toString() : minute;
    const hourToShow = hour < 10 ? "0" + hour.toString() : hour;
    timer.textContent = `${hourToShow} : ${minuteToShow} : ${secondToShow}`;
}

document.querySelector(".order").addEventListener("click", () => {
    countTime = setInterval(startTimer, 1000);
});
document.querySelector(".cancel").addEventListener("click", () => {
    clearInterval(countTime);
    hour = 23;
    minute = 59;
    second = 60;
});
