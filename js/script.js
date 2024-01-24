const tabsItem = document.querySelectorAll('.tabsItem');
const tabsContent = document.querySelectorAll('.tabsContentItem ');

for (let i = 0; i < tabsItem.length; i++) {
    tabsItem[i].addEventListener('click',function () {
        for (let j = 0; j < tabsItem.length; j++) {
            tabsItem[j].classList.remove('active')
            tabsContent[j].classList.remove('active')
        }
        tabsItem[i].classList.add('active')
        tabsContent[i].classList.add('active')
    })
}

// soat

const s = document.querySelector('.s');
const m = document.querySelector('.m');
const h = document.querySelector('.h');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');

function soat() {
    let time = new Date()
    let sec = time.getSeconds() * 6
    let min = time.getMinutes() * 6
    let hour = time.getHours() * 30

    s.style = `transform:rotate(${sec}deg);`
    m.style = `transform:rotate(${min}deg);`
    h.style = `transform:rotate(${hour}deg);`

    hours.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
    minutes.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    setTimeout(()=>{
        soat()
    },1000)

}
soat()


let stopHours = document.querySelector('.stopwatch__hours');
let stopMinute = document.querySelector('.stopwatch__minutes');
let stopSecond = document.querySelector('.stopwatch__seconds');
let startBtn = document.querySelector('.stopwatch__btn');

let seconds = 0;
let minut = 0;
let sot = 0;

let intervalId; // Yangi o'zgaruvchi qo'shildi

startBtn.addEventListener('click', function () {
    if (startBtn.innerHTML === "start") {
        intervalId = setInterval(function () {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minut++;
                if (minut === 60) {
                    minut = 0;
                    sot++;
                }
            }

            stopSecond.innerHTML = seconds < 10 ? '0' + seconds : seconds;
            stopMinute.innerHTML = minut < 10 ? '0' + minut : minut;
            stopHours.innerHTML = sot < 10 ? '0' + sot : sot;

        }, 1000);

        startBtn.innerHTML = "stop";
        startBtn.style = "background: red;";
    } else {
        clearInterval(intervalId); // Intervalni to'xtatish
        startBtn.innerHTML = "start";
        startBtn.style = ""; // Orqaga qaytarish uchun stilni tozalash
    }
});

