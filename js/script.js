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
        stopWatchHours.innerHTML = 0
        stopWatchMinute.innerHTML = 0
        stopWatchSecond.innerHTML = 0
    }
})

let stopWatchCount = 0

function stopWatch() {
    stopWatchCount++
    if (stopWatchCount < 60) {
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

clickBtns.forEach((el) => {
    // Har bir tugma bosilganda chaqiriladigan funksiya
    console.log(el);
    el.addEventListener('click', function qaytaBosilish () {
        if (this.innerHTML == 1) {
            clickScreenOut.innerHTML += 1;
        }else if(this.innerHTML == 2){
            clickScreenOut.innerHTML += 2;
        }else if(this.innerHTML == 3){
            clickScreenOut.innerHTML += 3;
        }else if(this.innerHTML == 4){
            clickScreenOut.innerHTML += 4;
        }else if(this.innerHTML == 5){
            clickScreenOut.innerHTML += 5;
        }else if(this.innerHTML == 6){
            clickScreenOut.innerHTML += 6;
        }else if(this.innerHTML == 7){
            clickScreenOut.innerHTML += 7;
        }else if(this.innerHTML == 8){
            clickScreenOut.innerHTML += 8;
        }else if(this.innerHTML == 9){
            clickScreenOut.innerHTML += 9;
        }else if(this.innerHTML == 0){
            clickScreenOut.innerHTML += 0;
        }else if(this.innerHTML == '.'){
            clickScreenOut.innerHTML += ".";
        }else if(this.innerHTML == 'ac'){
            clickScreenOut.innerHTML = "";
        }else if(this.innerHTML == 'ce'){
            
            let myArray = [clickScreenOut.innerHTML]
            myArray.shift()
            console.log(myArray);
        }
    })

});




// let meva = ['nok', 'uzum', 'anor', 'xurmo', 'bexi']
// meva.forEach((el,i,arr)=>{
//     console.log(i);
// })