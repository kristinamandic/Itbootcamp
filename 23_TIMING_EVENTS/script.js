console.log("1");
console.log("2");
// window.setTimeout(); - ovo bi bilo pravilnije ali podrazumijeva se da je window
// VREMENSKI OFFSET
// Prvi parametar je funkcija, drugi vrijeme 


// ANONIMNA FUNKCIJA
// setTimeout(function () {
//     console.log("3");  // this = objekat koji je pozvao metodu
// }, 1000 / 2);


// CALLBACK FUNKCIJA - IMENOVANA
// function ispis() {
//     console.log("3");
// }
// setTimeout(ispis, 1000 * 2);


// ARROW FUNKCIJA
setTimeout(() => {
    console.log("3");  // this = window
}, 1000 * 4);


// RAZLIKA IZMEDJU ARROW I ANONIMNIH FUKNCIJA
// btn1.addEventListener("click", () => {
//     console.log(this);
// });
//
// btn1.addEventListener("click", function () {
//     console.log(this);
// });

// PRIMJER - Klikom na dugme, prikazati poruku u konzoli nakon 2 sekunde.
// CALLBACK HELL - callback funkcija u callback funkciji u callback funkciji
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let div = document.getElementById("resault");
let timer = null;

btn1.addEventListener("click", () => {
    let datum = new Date();
    let sati = datum.getHours();
    let minuti = datum.getMinutes();
    let sekunde = datum.getSeconds();

    // Ovo IF grananje onemogucuje da se aktivira novi tajmer dok je stari tajmer ne zavrsi
    if (timer == null) {
        timer = setTimeout(() => {
            div.innerHTML = `${sati}:${minuti}:${sekunde}`;
            timer = null;
        }, 2000);
    }
});

btn2.addEventListener("click", function () {
    clearTimeout(timer);
    timer = null;
});


// 1. ZADATAK - Napraviti digitalni sat na stranici koji pokazuje trenutno vreme.
let ispis = document.getElementById("ispis");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let clock = null;

btn3.addEventListener("click", () => {
    if (clock === null) {
        clock = setInterval(() => {
            // Kada bismo imali ove promjenljive prije setIntervala svaki sekund bi ispisivao isto vrijeme
            let datum = new Date();
            let sati = datum.getHours();
            let minuti = datum.getMinutes();
            let sekunde = datum.getSeconds();
            ispis.innerHTML = `${sati}:${minuti}:${sekunde}`;
        }, 1000);
    }
});

btn4.addEventListener("click", function () {
    clearInterval(clock);
    clock = null;
});


// 2. ZADATAK 
let start = document.getElementById("start");
let inputBroj = document.getElementById("broj");
let stop = document.getElementById("stop");

let broj = 0;
let interval = null;

start.addEventListener("click", () => {
    if (interval === null) {
        interval = setInterval(() => {
            broj++;
            inputBroj.value = broj;
        }, 1000);
    }
});

stop.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
});