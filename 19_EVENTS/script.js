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


//////////////////////////////////////////////

// DOM

let inputGodinaRodjenja = document.getElementById("godRodj");
let inputPol = document.querySelectorAll("input[name='pol']");
let btnPosalji = document.getElementById("posalji");
let pIspis = document.getElementById("ispis");

btnPosalji.addEventListener("click", (e) => {  // e - event - veliki broj parametara nosi sa sobom
    e.preventDefault();  // da se stranica ne bi reloadovala
    let datum = new Date();
    let tekucaGodina = datum.getFullYear();
    let inputGodinaRodjenjaValue = inputGodinaRodjenja.value;
    // parsiranje vrijednosti promjenljive u broj
    inputGodinaRodjenjaValue = parseInt(inputGodinaRodjenjaValue)

    let god = tekucaGodina - inputGodinaRodjenjaValue;
    pIspis.innerHTML = `Korisnik ima ${god} godina`


    let checkedPol = document.querySelector("input[name='pol']:checked"); // vraca HTML tag onog input polja na koje je kliknuto, znaci cijelo input polje sa id-jem, name-om i value-om
    let checkedPolValue = checkedPol.value; // vraca vrijednost iz selektovanog HTML taga

    if (checkedPolValue == "z") {
        pIspis.innerHTML += " i zenskog je pola";
    }
    else if (checkedPolValue == "m") {
        pIspis.innerHTML += " i muskog je pola";
    }
    else {
        pIspis.innerHTML += " i nije se opredjelio za pol";
    }
});