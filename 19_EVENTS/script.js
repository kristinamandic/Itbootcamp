console.log("EVENTS");

// 1. Dohvati HTML element na koji zelis da postavis osluskivac
let pKlikni = document.getElementById("klikni");

// 2. Na element postavljamo osluskivac
// Prvi parametar - tip akcije - predefinisana kljucna rijec
// Drugi parametar - arrow funkcija
pKlikni.addEventListener("click", () => {
    console.log("Jednom kliknuto na paragraf");
});

/////////////////////////////////////////////////

// 1. 
let pKlikniDva = document.getElementById("dvaKlika");
// 2. 
pKlikniDva.addEventListener("dblclick", () => {
    console.log("Dva puta kliknuto na paragraf");
});

/////////////////////////////////////////////////

// Klikcemo na dugme +, a rezultat iz spana se mijenja

// 1.
let btnPlus = document.getElementById("plus");

// 2.
let res = 0;
let spanRes = document.getElementById("res");
btnPlus.addEventListener("click", () => {
    res++;
    // console.log(res);
    spanRes.innerHTML = res;
    if (res < 0) {
        spanRes.style.color = "pink";
    }
    else {
        spanRes.style.color = "red";
    }
});

// Minus dugme
let btnMinus = document.getElementById("minus");

btnMinus.addEventListener("click", () => {
    res--;
    spanRes.innerHTML = res;
    if (res < 0) {
        spanRes.style.color = "pink";
    }
    else {
        spanRes.style.color = "red";
    }
});


//////////////////////////////////////////////

// Dugme i input

let btnHello = document.getElementById("hello");
let inputIme = document.getElementById("ime");
let pHelloIspis = document.getElementById("helloIspis");

btnHello.addEventListener("click", () => {
    let inputImeValue = inputIme.value;
    pHelloIspis.innerHTML = `Hello ${inputImeValue}`;
});