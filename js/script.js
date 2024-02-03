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




// sekundomer
let stopWatchSecond = document.querySelector('.stopwatch__seconds');
let stopWatchMinute = document.querySelector('.stopwatch__minutes');
let stopWatchHours = document.querySelector('.stopwatch__hours');
let stopWatchBtn = document.querySelector('.stopwatch__btn');
let stopWatchLight = document.querySelector('.tabsLink__span');
let stopWatchAudio = document.querySelector('.stopwatch__audio')

stopWatchBtn.addEventListener('click', function () {
    if (this.innerHTML.toLowerCase() == "start"){
    this.innerHTML = "STOP"
    stopWatchLight.classList.add('active')
    interval = setInterval(() => {
        stopWatch()
    }, 1000);
    }else if(this.innerHTML.toLowerCase() == "stop"){
        this.innerHTML = "CLEAR"
        stopWatchLight.classList.remove('active')
        stopWatchLight.classList.add('active_clear')
        clearInterval(interval)
    }else if(this.innerHTML.toLowerCase() == "clear"){
        this.innerHTML = "START"
        stopWatchLight.classList.remove('active_clear')
        stopWatchHours.innerHTML = 0;
        stopWatchMinute.innerHTML = 0;
        stopWatchSecond.innerHTML = 0;
    }
})

let stopWatchCount = 0

function stopWatch() {
    stopWatchAudio.play()
    stopWatchCount++
    if (stopWatchCount < 59) {
        stopWatchSecond.innerHTML = stopWatchCount
    }
    if (stopWatchCount > 59) {
        stopWatchMinute.innerHTML++
        stopWatchCount = 0
        stopWatchSecond.innerHTML = stopWatchCount
    }
   if (stopWatchMinute.innerHTML > 59) {
    stopWatchHours.innerHTML++
    stopWatchMinute.innerHTML = 0
   }
}


// kalkulyator

let clickBtns = document.querySelectorAll('.calc__btn');
let clickScreenOut = document.querySelector('.calc__screen-out');

const sqrt = () => {
    clickScreenOut.innerHTML = Math.sqrt(clickScreenOut.innerHTML, 2)
}
const pow = () => {
    clickScreenOut.innerHTML = Math.pow(clickScreenOut.innerHTML, 2)
}


let string = "";
let arr = Array.from(clickBtns)
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        console.log('salom');
        if (e.target.innerHTML == '=') {
            string = eval(string);
            clickScreenOut.innerHTML = string;
        }else if(e.target.innerHTML== "ac"){
            string = "";
            clickScreenOut.innerHTML = string;
        }else if(e.target.innerHTML == "ce"){
            string = string.substring(0, string.length-1);
            clickScreenOut.innerHTML = string;
        }else if(e.target.innerHTML == "√"){
            sqrt();
        }else if(e.target.innerHTML == "%"){
            pow();
        }else if(e.target.innerHTML == "+/-"){
            let pas = clickScreenOut.innerHTML * -1;
            clickScreenOut.innerHTML = (pas)
        }else if (){
            let passedText = clickScreenOut.innerHTML + "/100";
            clickScreenOut.innerHTML = eval(passedText);
        }
            else{
            string += e.target.innerHTML;
            clickScreenOut.innerHTML = string;
        }
    })
})


// timer

let timerHour = document.querySelector('.timer__hours')
let timerMinute = document.querySelector('.timer__minutes')
let timerSecond = document.querySelector('.timer__seconds')
let timerPlay = document.querySelector('.timer__set')
let timerClear = document.querySelector('.timer__clear')
let timerBtns = document.querySelectorAll('.timer__btn, .timer__clear, .timer__set')
let timerAudio = document.querySelector('.timer__audio')



for (let i = 0; i < timerBtns.length; i++) {
    timerBtns[i].addEventListener('click', function () {
        timerBtn(this.innerHTML);
    })
    
}

function timerBtn(el) {
    if (el.toLowerCase() == "play") {
        timerPlay.innerHTML = "PAUSE"
        interval = setInterval(() => {
            timer()
        }, 10);
    }else if(el.toLowerCase() == "pause"){
        timerPlay.innerHTML = "PLAY"
        timerAudio.pause()
        clearInterval(interval)
    }else if(el.toLowerCase() == "clear"){
        timerHour.innerHTML = ''
        timerSecond.innerHTML = ''
        timerMinute.innerHTML = ''
        timerPlay.innerHTML = "PLAY"
        timerAudio.pause()
        clearInterval(interval)
        timerCount = 0
    }else{
        if (timerSecond.innerHTML.length < 2) {
            let check = timerSecond.innerHTML += el
            checkCount(check)
        }else if(timerSecond.innerHTML.length >= 2 && timerMinute.innerHTML.length
             < 2){
            timerMinute.innerHTML += el
        }else if(timerMinute.innerHTML.length >= 2 && timerHour.innerHTML.length
            < 2){
           timerHour.innerHTML += el
       }
    }
}

let timerCount = 0
function checkCount(check) {
    timerCount = check
}

function timer() {
    if(timerCount > 0 ){
    timerCount--
    timerSecond.innerHTML = timerCount
    }else if (timerCount == 0) {
    if(timerMinute.innerHTML > 0){
        timerMinute.innerHTML--
        timerCount = 59
        timerSecond.innerHTML = timerCount
    }else{
        if(timerHour.innerHTML > 0){
            timerHour.innerHTML--
            timerMinute.innerHTML = 59
            timerCount = 59 
            timerSecond.innerHTML = timerCount
        }else{
            timerHour.innerHTML = ''
            timerSecond.innerHTML = ''
            timerMinute.innerHTML = ''
            timerAudio.play()
        }
        
    }
      
} 
}